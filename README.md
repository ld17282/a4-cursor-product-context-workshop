# A4 — Providing Product Context to Cursor  
## Overview & Intent

This workshop demonstrates how to guide Cursor using product context instead of detailed implementation instructions.

### You will:
- [ ] Create a branch following a naming convention
- [ ] Navigate to and refine a product overview + rules file
- [ ] Use Cursor to update a component based on that context
- [ ] Verify changes using `git diff`

### Time: ~ 8 minutes

## 1. Clone and Run the App (1 minute)

To clone the repository, in your Cursor terminal, run:

```bash
git clone https://github.com/ld17282/a4-cursor-product-context-workshop.git
```

### a. Navigate into the frontend folder
In your Cursor terminal, run:

```bash
cd frontend
```

### b. Install dependencies and start the dev server
In your Cursor terminal, run:

```bash
npm install
npm run dev
```

### c. Open the local URL shown in your terminal 
The Cursor Terminal will show the local url. Click on it. 
![Terminal with localhost URL](images/terminal_localhost.png)

You should see a centered dark profile card.
![Profile card running on localhost](images/default-profile-card.png?v=3)

### ✅ Checkpoint: 
- [ ] The app runs, and you can see the `ProfileCard` component.
- [ ] Leave this terminal running so you can see changes on the frontend in real time.
- [ ] Create a new terminal (see below) for section 2.
    ![Terminal dev server](images/terminal-dev-server.png)

## 2. Create a Branch (1 minute)

Before making any changes, create a new feature branch for styling the `ProfileCard`. This repository includes a persistent git rule file: `git.mdc` (see file location below). Cursor must follow the branch naming convention defined there.

![Git rules file location](images/git-rules-file-location.png)


### a. Branch Naming Convention

All feature branches must follow the format defined by `git.mdc`:

![Cursor Git Rules](images/cursor-git-rules.png)

### b. Use Cursor to Create the Branch

In Cursor chat, ask:

> Create a new branch for styling the ProfileCard component. My name is [ENTER YOUR NAME]. Follow the naming convention defined by @git.mdc. 

Cursor should generate and execute a command similar to:

```bash
git checkout -b <your-name/profile-card-styling>
```

### c. Verify

In your new Cursor terminal (not the dev server) run:

```bash
git branch
```

You should see your new branch highlighted:

![New branch confirmation](images/new-branch-confirmation.png)

### ✅ Checkpoint:
- [ ] You are no longer on `main`
- [ ] `your-branch` follows the required naming format. 
This demonstrates that Cursor is reading and applying persistent rule files.

## 3. Refine Product Context and Apply Rules (3–4 minutes)

Now you will guide Cursor using product context instead of detailed implementation instructions.
Your goal is to refine the existing rule file and use it to modify the `ProfileCard` typography and theme.

### a. Refine the Product Context

Open `profile-card.mdc` found in the `.cursor` folder in the root directory. This file already defines conventions and constraints for the `ProfileCard` component.

![Profile card rules file location](images/profile-card-rules-file-location.png)

Pay attention to comments! Developers use comments to provide context for their code. In this exercise, comments are helpful tips for completing your tasks.
See an example comment on line 6 of the `profile-card.mdc` file:

![Example comment in profile-card.mdc](images/comment-example.png)

Your Tasks:

- [ ] Replace the `TBD` text under **Product Overview** with a short description (2–3 sentences) describing the overall tone and purpose of the ProfileCard.
- [ ] Adjust **one Typography rule** to reflect your design preference.
- [ ] Adjust **one Theme rule** to reflect your design preference.

Examples of acceptable tweaks:

- Change **Name** size (`text-2xl` → `text-3xl`)
- Adjust **Title** tone (`text-zinc-400` → `text-zinc-500`)
- Modify **Background** color (`bg-zinc-950` → `bg-lime-500`)
- Switch **Name** weight (`font-bold` → `font-semibold`)
- Tweak **Card** border (`border-zinc-800` → `border-lime-900` )

For more **color** options, see the [Tailwind CSS Colors documentation](https://tailwindcss.com/docs/colors#working-with-colors).

For more **font weight/size** options, see the [Tailwind CSS Typography documentation](https://v3.tailwindcss.com/docs/font-size).

Do **NOT**:
- Change layout rules
- Modify spacing structure
- Edit button styles
- Remove constraints

### b. Apply the Updated Rules

In Cursor chat, ask:

> Read @profile-card.mdc and update @ProfileCard.tsx to follow the updated Product Overview and rules. Only modify what is allowed by the rule file.

Because your dev server is still running, the browser should automatically refresh when the component is updated. Observe the changes in real time.
The layout should remain identical. Only colors or typography should have changed.

If, **AND ONLY IF**, you accidentally closed your dev server earlier, restart it:

```bash
cd frontend
npm run dev
```

### c. Verify with `git diff`

In Cursor chat, ask:

> provide a `git diff` of all the changes I made.

You should see small updates only, primarily changes to Tailwind `className` values in the file `ProfileCard.tsx`.

### ✅ Checkpoint

- [ ] Some text has changed.
- [ ] One or more colors have changed.
- [ ] Layout has not changed.
- [ ] Diff reflects minimal, rule-driven edits.

This demonstrates how product overview and constraints guide AI behavior without prescribing exact implementation details.


## 4. Complete the Profile Card With Your Info [OPTIONAL]

Replace string values in the prompts below with your information. Be sure to provide Cursor with `string` values in quotation marks (use `"Product Designer"`, not Product Designer). Because your dev server is still running, your browser should automatically refresh and display your personalized `ProfileCard` component.


### a. Update the `name`

In Cursor chat, ask:

> In @App.tsx, update the `name` prop passed to `ProfileCard` to the string "REPLACE WITH YOUR NAME". Do not modify any other code.


### b. Update the `title`

In Cursor chat, ask:

> In @App.tsx, update the `title` prop passed to `ProfileCard` to the string "REPLACE WITH YOUR TITLE". Do not modify any other code.


### c. Update the `bio`

In Cursor chat, ask:

> In @App.tsx, update the `bio` prop passed to `ProfileCard` to the string "REPLACE WITH YOUR BIO". Do not modify any other code.


### d. Add Your Avatar

- [ ] Download your avatar created during **A1 Figma Tutorials - Chapter 8** as a PNG file.
- [ ] Rename the file to `profile-avatar.png`.
- [ ] Drag and drop the file into `frontend/src/assets/` (see below)
    ![Relocate avatar to assets](images/relocate-avatar-to-assets.png)
- [ ] Then, in Cursor chat, ask:

> In @App.tsx, import `profile-avatar.png` from `src/assets` and pass it as the `avatarUrl` prop to `ProfileCard`. Do not modify other props or layout.


## 5. Activity Complete ✅ 

You're done! To submit your work:

- [ ] Add a screenshot of your `git diff` or your finished ProfileCard to this deck → [A4: Hands On Activity Class Submissions](https://docs.google.com/presentation/d/17GfyzsQToiupSLrwz6QOexj3pRIYClCn8BBCjzBOjM0/edit?slide=id.g3c94bca50ad_0_2379#slide=id.g3c94bca50ad_0_2379).
