import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';

const TitleForm = ({card, onSave, onChange, loading, errors }) =>{
  return(

    <form className="title-form">
      <div className="picture_display_container">
        <img src = {card.image} width="100%"/>
      </div>
      <TextInput
        name="title"
        label = "title"
        placeholder = "Title"
        value ={card.title}
        onChange = {onChange}
        error = {errors.title}
        />


      <input
        type="submit"
        disabled={loading}
        value={loading?'Saving ...': 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

TitleForm.propTypes = {
  card : PropTypes.object,
  onSave : PropTypes.func,
  onChange : PropTypes.func,
  errors : PropTypes.object,
  loading : PropTypes.bool
};

export default TitleForm;
