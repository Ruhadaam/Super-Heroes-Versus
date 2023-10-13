class Request {

    async get(url) {
        const response = await fetch(url);
        const data = response.json();
        return data;
    }

    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const responseData = response.json();
        return responseData();
    }



    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const responseData = response.json();
        return responseData();
    }



    async delete(url) {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        return "Data deletion was successful.";
    }
}
