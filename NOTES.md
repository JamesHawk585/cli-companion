
# Client 

1. [x] SPA
2. [x] Main page will display our list of code snippets as cards. 
    a. [x] Each snippet will have:
        - [x] title
        - [x] tags
        - [x] a block of code
        - [x] description 
    b. [] Each card will have edit and delete buttons.
    c. [] Each card will have appropriate css.  
3. [x] Main page will have a button to create a new snippet. 
    a. [x] When clicked, a modal popup will appear. 
    b. [x] It will have a form to create a new snippet. 
    c. [] Use the same modal popup when we edit a snippet, too.
    d. [] 
4. [] This main page will have a search bar. 
    a. Serch bar can search by: name, tag, desciprion, or code block.  


    ## Delete Snippet:
    1. attached onClick event to delete button. onCick calls an anonymous function that in turn calls handleDeleteSnippet in App.jsx. 
    2. Create handleDeleteSnippet in App.jsx
    3. handleDeleteSnippet should:
        - [] Delete the snippet from the db. 
        - [] Remove the snippet from the 'snippets' stateful array. 
        
        onCick calls an anonymous function that in turn calls handleEditSnippet in App.jsx.

    ## Edit Snippet
    1. Attach event listener to the edit button. 
    2. onCick calls an anonymous function that in turn calls handleEditSnippet in App.jsx. 
    3. handleEditSubmit should: 
        - send a PATCH request update the specified backend resource. 
        - Update the stateful array such that only the pathced object is changed. 

# Server 


# Deployment 