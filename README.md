# A4 — Providing Product Context to Cursor  
## Overview • Rules • Intent

This workshop demonstrates how to guide Cursor using lightweight product context instead of detailed implementation instructions.

You will:
- Create a branch following a naming convention
- Write a product overview + rules file
- Use Cursor to update a component based on that context
- Verify changes using `git diff`

Time: ~ 8 minutes

---

## 1. Clone and Run the App (1 minute)

Clone the repository:

```bash
git clone https://github.com/ld17282/a4-cursor-product-context-workshop.git
```

Navigate into the frontend folder:

```bash
cd a4-cursor-product-context-workshop/frontend
```

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the local URL shown in your terminal  

![Terminal with localhost URL](images/terminal_localhost.png)

You should see a centered dark profile card.

![Profile card running on localhost](images/default-profile-card.png)

### ✅ Checkpoint: 
- [ ] The app runs, and you can see the `ProfileCard` component.

---

## 2. Create a Branch (1 minute)

Your task is to modify the `ProfileCard` component using product context and rules. Before making any changes, create a new feature branch for styling the `ProfileCard`.

This repository includes a persistent git rule file located at:

```
.cursor/git.mdc
```

Cursor must follow the branch naming convention defined there.


### Branch Naming Convention

All feature branches must follow this format:

![Cursor Git Rules](images/cursor-git-rules.png)

### Use Cursor to Create the Branch

In Cursor chat, ask something like:

> Create a new branch for styling the ProfileCard component. Follow the naming convention defined in `.cursor/git.mdc`.

Cursor should generate and execute a command similar to:

```bash
git checkout -b <your-name/profile-card-styling>
```

### Verify

In your Cursor Terminal, Run:

```bash
git branch
```

You should see your new branch highlighted:

![New branch confirmation](images/new-branch-confirmation.png)

### ✅ Checkpoint:
- [ ] You are no longer on `main`
- [ ] `your branch` follows the required naming format. 
This demonstrates that Cursor is reading and applying persistent rule files.

---
## 3. Refine Product Context and Apply Rules (3–4 minutes)

Now you will guide Cursor using lightweight product context instead of detailed implementation instructions.
Your goal is to refine the existing rule file and use it to improve the `ProfileCard` typography.

### Refine the Product Context (2 minutes)

Open:

[ADD IMAGE HERE LATER]

This file already defines conventions and constraints for the `ProfileCard` component.

Your Task:

- [ ] Replace the `[TBD]` text in **Product Overview** with a short description (2–3 sentences) describing the overall tone and purpose of the ProfileCard.
- [ ] Slightly adjust **one Typography rule** to reflect your design preference.

Examples of acceptable tweaks:

- Change Name size (`text-2xl` → `text-3xl`)
- Adjust Title tone (`text-zinc-400` → `text-zinc-500`)
- Modify Bio spacing (`leading-relaxed` → `leading-loose`)
- Switch Name weight (`font-bold` → `font-semibold`)

Do NOT:
- Change layout rules
- Modify spacing structure
- Edit button styles
- Remove constraints

### Step 2 — Apply the Updated Rules (1 minute)

In Cursor chat, ask:

> Read @profile-card.mdc and update @ProfileCard.tsx to follow the updated Product Overview and Typography rules. Only modify what is allowed by the rule file.

Observe the changes in your browser.

The layout should remain identical.
Only typography should change.

### Step 3 — Verify with Git Diff (1 minute)

Run:

```bash
git diff
```

You should see small, controlled updates — primarily changes to Tailwind `className` values in `ProfileCard.tsx`.

### ✅ Checkpoint

- [ ] Typography feels more intentional and readable.
- [ ] Layout has not changed.
- [ ] Diff reflects minimal, rule-driven edits.

This demonstrates how product overview and constraints guide AI behavior without prescribing exact implementation details.
