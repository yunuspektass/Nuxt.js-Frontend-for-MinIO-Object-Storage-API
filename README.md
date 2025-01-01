## Nuxt.js Frontend for MinIO Object Storage API

This **Nuxt.js** frontend application, built with **Vuetify** and **Vue.js**, interacts with the [MinIO Object Storage API](https://github.com/yunuspektass/ASP.NET-Core-Web-API-MinIO-Object-Storage-Integration). It provides a clean and user-friendly interface for managing files in a MinIO bucket, including uploading, downloading, listing, and deleting files.

### Key Features
- **File Upload**: Easily upload files to a MinIO bucket.
- **File Download**: Download files directly from the UI.
- **File Management**: List and delete files stored in a MinIO bucket.
- **Responsive Design**: Optimized for both desktop and mobile devices using **Vuetify**.

### Technologies Used
- **Nuxt.js**: Vue.js framework for server-side rendering and static site generation.
- **Vuetify**: Material Design component framework for Vue.js.
- **Vue.js**: Progressive JavaScript framework for building user interfaces.
- **Axios**: Promise-based HTTP client for making API requests.
- **MinIO API**: Backend API for interacting with MinIO object storage.

### How to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yunuspektass/Nuxt.js-Frontend-for-MinIO-Object-Storage-API.git
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure the API Endpoint**:
   Update the API URL in the `.env` file:
   ```env
   API_URL=http://localhost:5000/api
   ```
4. **Run the Project**:
   ```bash
   npm run dev
   ```
5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

### Project Structure
- **`pages/`**: Contains the application pages (e.g., file upload, file list).
- **`components/`**: Reusable Vue components (e.g., file uploader, file list item).
- **`assets/`**: Static assets like images and styles.
- **`plugins/`**: Axios plugin for API requests.
- **`nuxt.config.js`**: Nuxt.js configuration file.

### Example Pages
- **File Upload**: `/upload` - Upload files to a MinIO bucket.
- **File List**: `/files` - List and manage files in a MinIO bucket.

### Contributing
Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Submit a pull request with a detailed description of your changes.

### License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Why Nuxt.js?
Nuxt.js simplifies the development of server-side rendered (SSR) and static web applications with its modular structure and automatic routing.

### Why Vuetify?
Vuetify provides a rich set of Material Design components, making it easy to create beautiful and responsive user interfaces.

### Why MinIO?
MinIO is a high-performance, S3-compatible object storage solution that is perfect for modern cloud-native applications.

---

### Links
- [MinIO Object Storage API](https://github.com/yunuspektass/ASP.NET-Core-Web-API-MinIO-Object-Storage-Integration)
- [Nuxt.js Documentation](https://nuxtjs.org/docs)
- [Vuetify Documentation](https://vuetifyjs.com)
- [MinIO Documentation](https://min.io/docs)
