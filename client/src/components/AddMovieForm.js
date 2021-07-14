import axios from "axios";
import { useState } from "react"
import { useHistory } from "react-router"

const AddMovieForm = (props) => {

    const initFormState = {
            title:"",
            director: "",
            genre: "",
            metascore: 0,
            description: ""
    }

    const {push} = useHistory();

    const [newMovie, setNewMovie] = useState(initFormState)

    const { title, director, genre, metascore, description } = newMovie;

    const handleChange = e => {
        setMovie({...movie, [e.target.name]: e.target.value});
    }

    const axiosPostMovie = () => {
        axios.post('http://localhost:5000/api/movies', newMovie)
            .then(res => {
                console.log('movie added', res)
                props.setMovies(res)
            })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axiosPostMovie();
        
    }

    return (
        <div className="col">
		<div className="modal-content">
			<form onSubmit={handleSubmit}>
				<div className="modal-header">						
					<h4 className="modal-title">Add Movie</h4>
				</div>
				<div className="modal-body">					
					<div className="form-group">
						<label>Title</label>
						<input value={title} onChange={handleChange} name="title" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Director</label>
						<input value={director} onChange={handleChange} name="director" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Genre</label>
						<input value={genre} onChange={handleChange} name="genre" type="text" className="form-control"/>
					</div>
					<div className="form-group">
						<label>Metascore</label>
						<input value={metascore} onChange={handleChange} name="metascore" type="number" className="form-control"/>
					</div>		
					<div className="form-group">
						<label>Description</label>
						<textarea value={description} onChange={handleChange} name="description" className="form-control"></textarea>
					</div>
									
				</div>
				<div className="modal-footer">			    
					<input type="submit" className="btn btn-info" value="Save"/>
					<Link to={`/movies/1`}><input type="button" className="btn btn-default" value="Cancel"/></Link>
				</div>
			</form>
		</div>
	</div>
    )

}

export default AddMovieForm;