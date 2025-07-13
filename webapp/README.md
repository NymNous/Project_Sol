# Sol's Certificate Management App (POC)

This is a proof-of-concept (POC) web application for managing digital certificates, built based on a design diagram. It allows users to upload, view, search, and filter certificates through a user-friendly interface.

This project was bootstrapped with [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The initial design and user flow were based on the `POC_Project_Sol.drawio` file located in the parent directory.

## Features

*   **Certificate Repository:** View all certificates in a paginated gallery.
*   **Upload Certificates:** Upload new certificates via a modal form, including details like bank, branch, date, and a file attachment.
*   **Search and Filter:** Filter certificates by bank, branch, and date.
*   **Responsive Design:** A clean, modern, and responsive UI built with Bootstrap.
*   **Header Navigation:** Basic navigation to other potential sections of the application.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/) (React)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Bootstrap](https://getbootstrap.com/) & [React-Bootstrap](https://react-bootstrap.github.io/)
*   **Package Manager:** [npm](https://www.npmjs.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your machine:

*   [Node.js](https://nodejs.org/en/) (which includes npm)

### Installation & Setup

1.  **Navigate to the project directory:**
    ```sh
    cd source/repos/Project_Sol/webapp
    ```

2.  **Install NPM packages:**
    This will install all the necessary dependencies required for the project.
    ```sh
    npm install
    ```

3.  **Run the development server:**
    This will start the application on a local server, typically at `http://localhost:3000`.
    ```sh
    npm run dev
    ```

Once the server is running, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality Overview

This section provides a detailed breakdown of the application's features and how they correspond to the user interface.

### 1. Main View & Header

*   **Header:** The application is topped by a header containing the application title ("האפליקציה של סול") and navigation links ("My Profile", "Settings", and "Certificate Repository"). These links are placeholders and do not lead to other pages in this POC.
*   **Main Title:** Below the header, the main title "מאגר האישורים" (Certificate Repository) is displayed.

### 2. Certificate Repository

The core of the application is the certificate repository, which includes the following features:

*   **Upload Button:** A prominent "העלאת אישור חדש" (Upload New Certificate) button is located at the top of the repository. Clicking this button opens a modal window to add a new certificate.
*   **Search and Filter Panel:** A card component allows users to filter the displayed certificates.
    *   **Bank (`בנק`):** A text input to filter by the bank's name.
    *   **Branch (`סניף`):** A text input to filter by the branch name.
    *   **Date (`תאריך`):** A date picker to filter by the certificate's date.
    *   **Search Button (`חיפוש`):** Applies the selected filters to the certificate list.
*   **Results Count:** A label displays the total number of certificates found based on the current filter ("נמצאו X תוצאות").
*   **Certificate Gallery:** The filtered certificates are displayed in a grid layout. Each certificate is shown as a card with the following details:
    *   Bank Name
    *   Branch Name
    *   Certificate Date
    *   A "Contact Details" (`פרטי קשר`) button (placeholder).
*   **Pagination:** At the bottom of the page, pagination controls allow the user to navigate through multiple pages of certificates if the total number exceeds the items-per-page limit (currently set to 6).

### 3. Uploading a New Certificate (Modal)

*   **Trigger:** Clicking the "העלאת אישור חדש" button.
*   **Form Fields:** The modal contains a form with the following fields:
    *   **Bank (`בנק`):** A dropdown menu to select from a predefined list of banks.
    *   **Branch (`סניף`):** A dropdown menu to select from a predefined list of branches.
    *   **Date (`תאריך`):** A date picker to set the certificate's date.
    *   **File Upload (`קובץ האישור`):** A file input that allows the user to select a file from their computer. It also includes a drag-and-drop area.
*   **Submission:** The "העלאת אישור" (Upload Certificate) button submits the form, adding the new certificate to the repository and closing the modal.

## Project Structure

```
webapp/
├── public/                 # Static assets
├── src/
│   ├── app/
│   │   ├── components/     # Reusable React components
│   │   │   ├── CertificateRepository.tsx
│   │   │   ├── CertificateUploadForm.tsx
│   │   │   └── Header.tsx
│   │   ├── layout.tsx      # Main app layout
│   │   └── page.tsx        # Main page component
│   └── ...
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```