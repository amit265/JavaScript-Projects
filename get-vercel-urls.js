// get-vercel-urls.mjs
import fetch from "node-fetch";
import fs from "fs";

const VERCEL_TOKEN = "lL42FLXINEbA4tgSRMIvv7xC"; // 🔐 Put your real token here
const TEAM = null; // If using Vercel personal account, leave null

const API_BASE = "https://api.vercel.com";
const headers = {
  Authorization: `Bearer ${VERCEL_TOKEN}`,
};

const fetchProjects = async () => {
  const url = `${API_BASE}/v9/projects?limit=200${
    TEAM ? `&teamId=${TEAM}` : ""
  }`;
  const res = await fetch(url, { headers });
  const data = await res.json();
  return data.projects;
};

const fetchProductionDeployment = async (projectId) => {
    // Step 1: Get latest production deployment
    const deploymentsUrl = `${API_BASE}/v6/deployments?projectId=${projectId}&target=production${
      TEAM ? `&teamId=${TEAM}` : ""
    }`;
    const res = await fetch(deploymentsUrl, { headers });
    const data = await res.json();
    const latest = data.deployments?.[0];
  
    if (!latest?.uid) return null;
  
    // Step 2: Fetch aliases for that deployment
    const aliasUrl = `${API_BASE}/v2/deployments/${latest.uid}/aliases${
      TEAM ? `?teamId=${TEAM}` : ""
    }`;
    const aliasRes = await fetch(aliasUrl, { headers });
    const aliasData = await aliasRes.json();
  
    return aliasData.aliases?.[0]?.alias
      ? `https://${aliasData.aliases[0].alias}`
      : null;
  };
  

const main = async () => {
  const projects = await fetchProjects();

  console.log("📦 Found", projects.length, "projects\n");

  const results = [];

  for (const project of projects) {
    const publicUrl = await fetchProductionDeployment(project.id);
    if (publicUrl) {
      const line = `${project.name} → ${publicUrl}`;
      console.log("✅", line);
      results.push(line);
    } else {
      const line = `${project.name} → ❌ No production URL`;
      console.log("❌", line);
      results.push(line);
    }
  }

  fs.writeFileSync("vercel-deployments.txt", results.join("\n"), "utf-8");
  console.log("\n📝 Saved to vercel-deployments.txt");
};

main().catch((err) => {
  console.error("❌ Error:", err.message);
});
