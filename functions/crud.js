const handleSubmit = async (route, dados) => {
    if (!route) {
        console.error(`Requisição de submit feita sem uma rota!`);
        return;
    };

    if (!dados) {
        console.error(`Requisição de submit feita sem dados!`);
        return;
    };

    try {
        const response = await fetch(`/api/${route}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        });

        if (response.ok) {
            console.log(`${route} registrado(a) com sucesso!`);
            return true;
        } else {
            console.error(`Erro ao registrar ${route}`);
            return false;
        }
    } catch (error) {
        console.error(`Erro ao registrar ${route}`, error);
        return false;
    };
};



const handleDelete = (route, item, fetchDados) => {
    let deleteSuccess = false;
    if (!route) {
        console.error(`Requisição de submit feita sem uma rota!`);
        return;
    };

    if (!item) {
        console.error(`Requisição de submit feita sem um item!`);
        return;
    };

    fetch(`/api/${route}/delete?id=${item._id}`, {
        method: 'DELETE',
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message);

            if (fetchDados) {
                fetchDados();
            };

            deleteSuccess = true;
        })
        .catch((error) => {
            console.error(`Erro ao excluir ${route}`, error);
        });
    return deleteSuccess, null;
};



const fetchData = async (route) => {
    if (!route) {
        console.error(`Requisição de fetch feita sem rota!`);
        return;
    };

    try {
        const response = await fetch(`/api/${route}/get`, {
            method: 'GET',
        });

        if (response.status === 200) {
            const data = await response.json();
            return data;
        } else {
            console.error(`Erro ao buscar por dados de ${route}`);
        }
    } catch (error) {
        console.error(`Erro ao buscar por dados de ${route}`, error);
    };
};



const handleUpdate = async (item, route, dados, fetchDados) => {
    if (!item) {
        console.error(`Requisição de update feita sem um item!`);
        return;
    };

    if (!route) {
        console.error(`Requisição de update feita sem uma rota!`);
        return;
    };

    if (!dados) {
        console.error(`Requisição de update feita sem dados!`);
        return;
    };

    const novosDados = dados;

    try {
        const response = await fetch(`/api/${route}/update?id=${String(item._id)}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ novosDados }),
        });

        if (response.status === 200) {
            console.log(`${route} atualizado com sucesso!`);
            if (fetchDados) fetchDados();
        } else {
            console.error(`Erro ao atualizar ${route}`);
        }
    } catch (error) {
        console.error(`Erro ao atualizar ${route}, error`);
    }
    return null;
};

export { handleSubmit, handleDelete, fetchData, handleUpdate };