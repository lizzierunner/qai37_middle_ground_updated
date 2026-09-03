/** @type {import('next').NextConfig} */
const isGithubPages = process.env.GITHUB_ACTIONS === "true" || process.env.GITHUB_PAGES === "true";
// Derive the basePath from this repo's actual name so it stays correct if the repo is ever renamed/forked.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "qai37_middle_ground_updated";
const basePath = isGithubPages ? `/${repoName}` : "";

const nextConfig = {
  output: "export",
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  trailingSlash: true,
  // Required for static export when using next/image (safe to keep even with plain <img>).
  images: { unoptimized: true },
};

export default nextConfig;
