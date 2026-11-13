# Kajal Vishwakarma – Portfolio Website

A simple personal portfolio built with only HTML, CSS and JavaScript. No installation or build step is needed.

## Folder structure

```
portfolio/
├── index.html
├── css/style.css
├── js/script.js          <- edit your content here
├── assets/
│   ├── images/           <- profile.jpg, spam-detector.jpg
│   └── documents/        <- resume.pdf
└── README.md
```

## 1. Update your content

Open `js/script.js`. All text on the website is stored in the `DATA` object at the top of the file.

- Change a line of text and save. The website updates.
- Lines marked `// TODO` are things you still need to fill in.
- If you leave a list empty (`[]`) or a text as `""`, that section, card or line is hidden automatically.

Examples:

- Add a project link: set `link: "https://github.com/your-username/your-repo"` inside the project.
- Add the passing year for your ITI: set `period: "2024"` in the ITI entry.
- Add a new certificate: copy the certificate block, paste it after the comma, and change the details.
- Add a new project: copy the whole project block `{ ... }` and paste it below the first one.

## 2. Add or replace images and resume

| What | Where to put it |
|------|-----------------|
| Profile photo | `assets/images/profile.jpg` (a square photo works best) |
| Project image | `assets/images/spam-detector.jpg` (a screenshot of your project, wide format) |
| Resume | `assets/documents/resume.pdf` |

Keep the same file names, or change the file name in `js/script.js`. If an image is missing, a placeholder is shown instead.

## 3. Test on your computer

Double-click `index.html` to open it in your browser.

## 4. Publish on GitHub Pages

1. Sign in to GitHub and click **New repository**. Name it, for example, `portfolio`. Keep it **Public**.
2. Click **uploading an existing file**. Upload **everything inside** the `portfolio` folder (`index.html`, `css`, `js`, `assets`, `README.md`). Click **Commit changes**.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/ (root)**, then click **Save**.
6. Wait 1–2 minutes. Your site will be live at:
   `https://kkajal2985-design.github.io/portfolio/`

To update the site later, edit the files on GitHub (pencil icon) or upload them again.

## 5. Placeholders still to fill in

- [ ] Passing years: ITI, B.A., Class 12, Class 10
- [ ] Check the spelling of the ITI name
- [ ] Project link for Spam Mail Detector (the button stays hidden until you add it)
- [ ] Project screenshot: `assets/images/spam-detector.jpg`
- [ ] More detail on your contribution to the project
- [ ] CITS practical exposure, workshops or lab work
- [ ] Company names for the telecaller and receptionist jobs
- [ ] Trade skills for CSA (add a new skills group)
