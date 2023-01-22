import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const Article = ({ article }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    const handleEdit = () => {
        const data = {
            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date,
            updatedDate: Date.now()        
        };
        axios.put('http://localhost:3004/articles/'+article.id, data).then((res) => {
            setIsEditing(false);
        });

        setIsEditing(false);
    }

    const handleDelete = () => {
        axios.delete('http://localhost:3004/articles/'+article.id);
        window.location.reload();
    }



    const dateFormater = (date) => {
        return new Date(date).toLocaleDateString()
    };

  return (
    <div className="article">
      <div className="card-header">
        <h3>{article.author}</h3>
        <em>Posted: {dateFormater(article.date)}</em>
      </div>
      {isEditing ? (
        <textarea defaultValue={article.content} onChange={(e) => setEditContent(e.target.value)}></textarea>
      ) : (
        <p>{editContent ? editContent: article.content}</p>
      )}
      <div className="btn-container">
        { isEditing ?  <button onClick={() => handleEdit()}>Valider</button> : <button onClick={() => 
             setIsEditing(true)}>Edit</button> }
        <button onClick={() => {
            if(window.confirm("Voulez-vous vraiment supprimer cet article?")){
                handleDelete();
            }
        }}>Supprimer</button>
      </div>
    </div>
  );
}

export default Article