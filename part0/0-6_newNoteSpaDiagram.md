# New Note in Single Page App Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: User writes in textbox and clicks Save
    
    Note right of browser: JS event handler captures form submit
    Note right of browser: e.preventDefault() prevents default form submission
    Note right of browser: JS adds note to notes array
    Note right of browser: JS redraws notes list on page
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: Content-type: application/json
    Note right of browser: Payload: {content: "aaaaa", date: "2025-04-18T18:12:08.257Z"}
    activate server
    server-->>browser: 201 Created {"message":"note created"}
    deactivate server
    
    Note right of browser: Browser stays on same page, no reload
```