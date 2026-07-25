#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
build_dir="$project_dir/dist"

rm -rf "$build_dir"
mkdir -p "$build_dir/client/assets" "$build_dir/server"

cp "$project_dir/index.html" "$build_dir/client/index.html"
cp -R "$project_dir/assets"/. "$build_dir/client/assets"/

cat > "$build_dir/server/index.js" <<'EOF'
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      const indexUrl = new URL("/index.html", url);
      return env.ASSETS.fetch(new Request(indexUrl, request));
    }

    return env.ASSETS.fetch(request);
  }
};
EOF

printf "Built static site in %s\n" "$build_dir"
