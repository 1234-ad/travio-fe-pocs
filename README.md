# travio-fe-pocs
This repositories used by our interns for internal R&amp;D, innovations and pocs purpose to be used for project travio

# GitHub Version Control Guidelines

These guidelines define how our team should work with GitHub to keep our workflow consistent, clean, and efficient.  

---

## 🔹 Branching Rules

- **`main` branch**
  - Always stable and production-ready.
  - No direct commits allowed – use Pull Requests (PRs).

- **`develop` branch**
  - Latest integration branch.
  - All features merge here before going to `main`.

- **Feature branches** (`feature/<name>`)
  - For new features, enhancements, or bug fixes.
  - Create from `develop`.
  - Example: `feature/login-ui`, `feature/api-auth`.

- **Hotfix branches** (`hotfix/<name>`)
  - For urgent production fixes.
  - Create from `main`.

---

## 🔹 Standard Workflow

1. **Start Work**
   ```bash
   git fetch origin
   git checkout -b feature/your-feature-name origin/develop
Make Changes & Commit

Keep commits small and meaningful.

Follow Conventional Commits:

feat: → new feature

fix: → bug fix

chore: → configs / cleanup

docs: → documentation

refactor: → improvements without behavior change

Example:

bash
Copy code
git add .
git commit -m "feat(auth): implement JWT-based login"
Sync Before Push

bash
Copy code
git pull --rebase origin develop
Push Your Branch

bash
Copy code
git push origin feature/your-feature-name
Raise a Pull Request (PR)

PR target: feature/... → develop (or main if hotfix).

PR title: short & descriptive.

PR description should include:

✅ What the change does

✅ Why it is needed

✅ Any screenshots or test notes

Review & Merge

At least 1 reviewer approval required.

Resolve conflicts before merge.

Use Squash & Merge to keep history clean.

Cleanup

bash
Copy code
git branch -d feature/your-feature-name
git push origin --delete feature/your-feature-name
🔹 Best Practices
✔ Always pull the latest changes before starting work.

✔ Keep PRs small, focused, and easy to review.

✔ Never commit secrets, credentials, or .env files.

✔ Run tests and lint checks locally before pushing.

✔ Use Draft PRs for early feedback.

✔ Document significant changes in the PR description.

⚡ Following these guidelines ensures:

Consistent workflow across the team

Fewer merge conflicts

Clean and understandable history

Faster reviews and deployments



