
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
        

    ## Edit Snippet
    1. [] Add an onClick event to the edit button of the SnippetCard to trigger a modal form similar to that in SnippetFrom.jsx 
    1. [] Attach event listener to the "Submit Changes" button on the modal. 
    2. [] onSubmit calls an anonymous function that in turn calls handleEditSnippet in App.jsx or SnippetList.jsx?. 
    3. [] handleEditSubmit should:   
        - send a PATCH request update the specified backend resource. 
        - Update the stateful array such that only the patched object is changed. 

# Server 


# Deployment 