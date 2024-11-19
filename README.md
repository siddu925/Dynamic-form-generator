**Dynamic Form Generator**

A Dynamic Form Generator built with React and Vite, leveraging Material-UI for styled components.This tool dynamically generates fully-functional forms in real-time from a JSON schema. Ideal for surveys, feedback forms, or any scenario requiring dynamic form creation.



**Features**

-JSON Schema Input: Define your form's structure easily with JSON.

-Dynamic Form Rendering: Generate fully functional forms without additional coding.

-Material-UI Integration: Modern, visually appealing, and responsive designs.


-Dark Mode Support: Toggle between light and dark modes for better accessibility.

-Rich Input Types Supported:
      
      
      1.Text fields
      
      2.Email fields
      
      3.Textareas
      
      4.Dropdown menus
      
      5.Checkboxes
      
      6.Radio buttons


-Field Validation: Supports required fields and regex-based validation patterns.
Responsive Design: Optimized for all devices—desktop, tablet, and mobile.

**Demo**
You can try the live demo here: 

**Usage**

JSON Schema Example

Here’s a sample JSON schema to generate a Customer Satisfaction Survey:

{
 "formTitle": "Customer Satisfaction Survey",
 
"formDescription": "We value your feedback. Please take a moment to complete this survey.",
 
   "fields": [
   
    {
      "id": "customerName",
      "type": "text",
      "label": "Your Name",
      "required": true,
      "placeholder": "Enter your name"
    },
    {
      "id": "email",
      "type": "email",
      "label": "Email Address",
      "required": true,
      "placeholder": "you@example.com",
      "validation": {
        "pattern": "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
        "message": "Please enter a valid email address"
      }
    },
    {
      "id": "serviceRating",
      "type": "select",
      "label": "Service Rating",
      "required": true,
      "options": [
        { "value": "1", "label": "1 - Very Dissatisfied" },
        { "value": "2", "label": "2 - Dissatisfied" },
        { "value": "3", "label": "3 - Neutral" },
        { "value": "4", "label": "4 - Satisfied" },
        { "value": "5", "label": "5 - Very Satisfied" }
      ]
    },
    {
      "id": "feedback",
      "type": "textarea",
      "label": "Additional Feedback",
      "required": false,
      "placeholder": "Share your thoughts"
    },
    {
      "id": "recommend",
      "type": "checkbox",
      "label": "Would you recommend us to others?",
      "required": true,
      "options": [
        { "value": "yes", "label": "Yes" },
        { "value": "no", "label": "No" }
      ]
    }
  ]
}


**Steps to Use**

1.Define your form schema in JSON format.

2.The form generator will automatically render the form based on the JSON schema.

3.Submit data for further processing as needed.

**Project Structure**

src/

 components/

     Header.jsx          # Includes dark mode toggle

     JSONEditor.jsx      # Schema editor for form customization

     FormGenerator.jsx   # Dynamically generates forms from JSON

     FormField.jsx       # Handles individual form fields

     Footer.jsx          # Footer for additional information

App.css                 # Global and component-specific styles

App.jsx                 # Main application logic

main.jsx                # Entry point with Vite configuration

**Dark Mode Support**
Toggle the dark mode in the app header to adjust the form’s colors and improve accessibility.

**Built With**

-React: Component-based framework for building the UI.

-Vite: Fast build tool optimized for modern web development.

-Material-UI: For responsive and professional-looking components.
