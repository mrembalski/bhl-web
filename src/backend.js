
const apiUrl = "http://localhost:3000/";

function getDefaultHeader() {
    return {
        'Content-Type': 'application/json',
        'firebaseUid': "5UCEfyrnqDgCYwub96BnCqpIG9T2" //"localStorage.getItem('token')
    }
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        headers: getDefaultHeader(),
        body: JSON.stringify(data)
    })
    return response.json()
}
async function getData(url) {
    const response = await fetch(url, {headers: getDefaultHeader()});
    return response.json();
}

export async function createGroup(groupName) {
    fetch(apiUrl + "group/create_new_group", {method: "POST"})
}

export async function getMyGroups() {
    return await getData(apiUrl + "group/my_groups");
}