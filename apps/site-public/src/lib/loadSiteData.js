import fs from "fs";
import path from "path";

function findMonorepoRoot(start = process.cwd()) {
    let dir = start;
    while (dir !== path.parse(dir).root) {
        if (fs.existsSync(path.join(dir, ".env"))) {
            return dir;
        }
        dir = path.dirname(dir);
    }
    throw new Error("Monorepo root not found.");
}

const repoRoot = findMonorepoRoot();
const fallbackDir = path.join(repoRoot, "test");

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB || "sitekit";
const COLLECTION_NAME = process.env.MONGO_COLLECTION || "pages";

export async function loadSiteData() {
    console.log(fallbackDir)
    let documents;
    console.log("[loadSiteData] Loading site data...");
    try {
        throw new Error("MongoDB connection not implemented");
        /*if (!MONGO_URI) throw new Error("MONGO_URI not set");

        const { MongoClient } = await import("mongodb");
        const client = new MongoClient(MONGO_URI);
        await client.connect();

        const db = client.db(DB_NAME);
        const collection = db.collection(COLLECTION_NAME);
        documents = await collection.find({}).toArray();

        await client.close();
        console.info("[loadSiteData] Loaded from MongoDB");*/
    } catch (err) {
        console.warn("[loadSiteData] MongoDB failed, falling back to JSON:", err.message);
        // get files, which are the files in the fallback directory
        const files = await fs.promises.readdir(fallbackDir);


        console.log("[loadSiteData] Files in fallback directory:", files);
        const jsonFiles = files.filter((f) => f.endsWith(".json"));

        documents = [];
        for (const file of jsonFiles) {
            const raw = await fs.promises.readFile(path.join(fallbackDir, file), "utf-8");
            documents.push(JSON.parse(raw));
        }
    }
    const routingData = documents.map((doc) => ({
        slug: doc.slug,
        type: doc.type,
        title: doc.meta?.title || doc.slug,
    }));

    const enrichedDocs = documents.map((doc) => ({
        ...doc,
        routingData,
    }));

    return { data: enrichedDocs };
}
