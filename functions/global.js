const handleChange = (e, setDados, dados) => {
    const { name, value } = e.target;
    setDados({
        ...dados,
        [name]: value,
    });
};

export {handleChange};