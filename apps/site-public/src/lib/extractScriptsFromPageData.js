import fs from "fs";
import path from "path";

/**
 * Extracts and personalizes scripts from modules.
 * Replaces all instances of "placeholderID" in the script with the module's `props.id`.
 *
 * @param {object} pageData - Full page object with modules.
 * @returns {Array<{ id: string, script: string }>}
 */
export function extractScriptsFromPageData(pageData) {
    if (!Array.isArray(pageData?.modules)) return [];
    return pageData.modules
        .map((mod) => {
            const moduleName = mod?.module;
            const instanceId = mod?.props?.id;
            if (!moduleName || !instanceId) return null;

            const scriptPath = path.resolve(`./src/modules/${moduleName}/scripts.js`);
            if (!fs.existsSync(scriptPath)) return null;
            console.log(`Found script for module ${moduleName} at ${scriptPath}`);
            let script = fs.readFileSync(scriptPath, "utf8").trim();
            if (!script) return null;
            console.log('script', script);
            // convert the script to a string 
            script = script.toString();
            // Replace all placeholderID tokens with the actual module instance ID
            script = script.replace(/_MID_/g, instanceId);
            console.log(`Extracted script for module ${moduleName} with ID ${instanceId}`);
            return script;
        })
        .filter(Boolean);
}