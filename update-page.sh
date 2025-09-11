#!/bin/bash
# 1. Pull latest repo changes
git pull origin main

# 2. Stage & commit new local changes
git add .
git commit -m "Update portfolio with latest QA scripts/reports"

# 3. Push to GitHub
git push origin main

echo "✅ Portfolio updated: https://shaheent.github.io/portfolio/"
