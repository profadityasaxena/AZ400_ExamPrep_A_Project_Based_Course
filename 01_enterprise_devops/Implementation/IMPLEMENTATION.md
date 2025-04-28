## 🌐 Deployment Environment Strategy

To align with enterprise DevOps practices, this project uses a **three-tier environment model** for testing, validation, and release.

### ✅ Final Deployment Flow

| Environment | Purpose            | Branch       | Platform         | URL |
|-------------|--------------------|--------------|------------------|-----|
| **Development** | Ongoing development, experimentation | `dev`         | GitHub Pages     | [🔗 Dev Environment](https://profadityasaxena.github.io/AZ400_ExamPrep_A_Project_Based_Course/project_repo/) |
| **Testing/Staging** | Feature preview and QA validation | `main`        | Vercel           | [🔗 Staging Environment](https://az-400-exam-prep-a-project-based-course.vercel.app) |
| **Production** | Approved release deployment | `release` (or tag) | Azure Static Web App / App Service | 🔒 _To be configured_ |

---

### 🚀 Why This Model?

- 🧪 **Dev (GitHub Pages):** Fast iteration, no authentication or reviews
- 🔄 **Staging (Vercel):** Reflects merged features on `main`, auto-built previews
- ✅ **Prod (Azure):** Enterprise-grade reliability and security for public access

---

### 🔧 To-Do for Azure Production

- [ ] Setup Azure Static Web App / App Service
- [ ] Configure GitHub deployment via `release` branch or tagged commits
- [ ] Add Azure credentials and secrets to GitHub Actions
- [ ] Define production pipeline (`azure-prod.yml`)

