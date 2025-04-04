import { useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModelo from "@/componentes/PostModelo";
import ReactMarkdown from "react-markdown";
import './Post.css';

export default function Postagem() {
    // O número do post a ser exibido foi enviado via parâmetro na url:
    const parametros = useParams();
    // Pegando o post específico no json de posts (usando find):
    const post = posts.find((post) => {
        // parametros.id é STRING!!! // O id no JSON é número!!
        // Logo precisamos converter antes de comparar:
        return post.id === Number(parametros.id);
    });
    if ( post === undefined ) {
        return <h1>Post não encontrado...</h1>
    }

    return (
        <PostModelo
            /* a imagem de capa está em /assets/posts/id/capa.png */
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            /* o titulo está no json do post */
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </PostModelo>
    );
}