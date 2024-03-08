
# Client 

1. [x] SPA
2. [x] Main page will display our list of code snippets as cards. 
    a. [x] Each snippet will have:
        - [x] title
        - [x] tags
        - [x] a block of code
        - [x] description 
    b. [x] Each card will have edit and delete buttons.
    c. [] Each card will have appropriate css.  
3. [x] Main page will have a button to create a new snippet. 
    a. [x] When clicked, a modal popup will appear. 
    b. [x] It will have a form to create a new snippet. 
    c. [] Use the same modal popup when we edit a snippet, too. 
4. [] This main page will have a search bar. 
    a. Serch bar can search by: name, tag, desciprion, or code block.  


    ## Add Snippet:
    1. [x] Clear the modal form on submission. 


    ## Delete Snippet:
    1. [x] attached onClick event to delete button. onCick calls an anonymous function that in turn calls handleDeleteSnippet in App.jsx. 
    2. [x] Create handleDeleteSnippet in App.jsx
    3. [x] handleDeleteSnippet should:
        - [x] Delete the snippet from the db. 
        - [x] Remove the snippet from the 'snippets' stateful array. 
        - [x] Prompt the user with window.confirm before deletion. 


        ### Consider changing SnippetForm.jsx to addSnippetForm.jsx for clarity. 
        


    ## EditSnippetForm modal 
    1. [] Create EditSnippetForm.jsx in EditSnippetForm directory. 
    2. [] Import useRef in SnippetCard.jsx
    3. [] declared const refName = useRef(null) in SnippetCard.jsx  
    4. [] Pass the refName from SnippetCard.jsx to EditSnippetForm.jsx
    5. [] Use <dialog ref={refName}> on <form></form> element jsx in EditSnippetForm.jsx
    6. [] Submit form. onSubmit() triggers onSnippetFormPatched() in EditSnippetForm.jsx 
        - Should onSnippetFormPatched() be in App.jsx, since it will have to update the snippets stateful array? 
        - PATCH request updated backend resource. 
        - Updates stateful array of objects to replace the snippetObj if snippetId == snippet.id. 
    7. Create a close button for the editSnippet modal form. 
    8. Ensure onSnippetFormPatched resets the form upon submission. 



# Server 


# Deployment 