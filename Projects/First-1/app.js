
// Scopo del Esercitazione.
/**
 * @this Visualizza-Dati-da-un'API-Pubblica-Semplice:
   @this Obiettivo: Recuperare un elenco di commenti (o testo, o like) da un'API pubblica 
    e visualizzarli come una lista nel DOM.
    @this Esercizio:
    Fai una richiesta fetch all'endpoint /users di JSONPlaceholder.
    Per ogni utente ricevuto, crea un <div> contenente il suo utente e testo.
    Aggiungi questi <div> a un <div> con id "comment-sc" esistente nel DOM.
 * 
 */

    const limit = 10;
    const skip = 10;
    const url = `https://dummyjson.com/comments?limit=${limit}&skip=${skip}&select=body,postId`;
    
    async function CommentApiBlock(){
        try {
            const parent_element = document.getElementById("comment-sc");

            parent_element.innerHTML =  `<p>Loading..</p>`;

            const fetch_api = await axios.get(url);
            const data = fetch_api.data;
            let array_comment = [];
            let condition = false;

                if (data.length !== 0) {
                    const comments_list = data.comments.forEach(element => { array_comment.push(element)});
                    condition = true;
                    parent_element.innerHTML =  ``;
                }

            console.log(data);
            console.log(array_comment)
            console.log(condition)

            if (condition) {
                
            array_comment.forEach((element, index) => {
                const comments = `<div class="card">
                                    <div class="card-body">
                                        <h2>${element.user.username}</h2>
                                        <p>${element.body}</p>
                                        <div class="container-fluid bottom-card"><b>Likes:</b> ${element.likes}</div>
                                    </div>
                                </div>`;
                parent_element.innerHTML += comments
            })
            } else {
                parent_element.innerHTML = `<p>Lista Vuota.</p>`
            }

        } catch (error) {
            console.log(error);
        }
    }

    CommentApiBlock()

    // function PromiseFun() {
    //     let promise = new Promise((revolve, reject) => {
    //         axios.get(url).then(response => {
    //             console.log(response);
    //             console.log("Stato:", response.status);
    //             revolve(response.data);
    //         }).catch(error => {
    //             console.log(error);
    //             reject(console.log("Stato:", error.status));
    //         })
    //     })

    //     return promise
    // }

    // let list = [];
    // PromiseFun().then(element => element.comments.forEach(value => {list.push(value)}));
    // console.log(list)