window.location.hash = '';
let url = 'https://jsonplaceholder.typicode.com/users';
let divWrapper = document.createElement('div');
divWrapper.classList.add('row');

const createDom = (data) => {
	for (let i in data) {
		let divUser = document.createElement('div');
		divUser.classList.add('user');
		divUser.setAttribute('id', +i + 1);
		let btnDel = document.createElement('button');
		btnDel.innerHTML = 'delete';
		btnDel.classList.add('delBtn');
		let btnEdit = document.createElement('button');
		btnEdit.innerHTML = 'edit';
		btnEdit.classList.add('editBtn');
		let btnSave = document.createElement('button');
		btnSave.innerHTML = 'save';
		btnSave.classList.add('saveBtn');

		for (let j in data[i]) {
			if (typeof data[i][j] === 'object') {
				let divAdress = document.createElement('div');
				divAdress.innerHTML = `<b>${j}:</b>`;
				for (let k in data[i][j]) {
					if (typeof data[i][j][k] === 'object') {
						let div = document.createElement('div');
						div.innerHTML = `<b>${k}:</b>`;
						for (let z in data[i][j][k]) {
							div.innerHTML += `<p><b>${z}:</b></p><input type = 'text' value = ${data[i][j][k][z]} readonly = 'readonly'></input>`;
							divAdress.append(div);
						}
					} else {
						divAdress.innerHTML += `<p><b>${k}:</b></p><input type = 'text' value = ${data[i][j][k]} readonly = 'readonly'></input>`;
						divUser.append(divAdress);
					}
				}
			} else {
				let p = document.createElement('p');
				p.innerHTML = `<b>${j}:</b>`;
				let input = document.createElement('input');
				input.setAttribute('type', 'text');
				input.setAttribute('value', `${data[i][j]}`);
				input.setAttribute('readonly', 'readonly');
				if (j === 'name') input.classList.add(`${j}`);
				divUser.append(p);
				divUser.append(input);
			}
		}
		divUser.append(btnDel);
		divUser.append(btnEdit);
		divUser.append(btnSave);
		divWrapper.append(divUser);
	}
	document.getElementById('root').append(divWrapper);
	document.querySelectorAll('.delBtn').forEach(el => el.addEventListener('click', deleteUser));
	document.querySelectorAll('.editBtn').forEach(el => el.addEventListener('click', editDataUser));
	document.querySelectorAll('.saveBtn').forEach(el => el.addEventListener('click', saveDataUser));
	document.querySelectorAll('.name').forEach(el => el.addEventListener('click', goNewPage));
	document.querySelector('.backBtn').addEventListener('click', goNewPage);
}
const callApi = (url) => {
	loader.style.display = 'block';
	fetch(url)
		.then(response => response.json())
		.then(data => {
			loader.style.display = 'none';
			createDom(data);
		}).catch(err => {
			console.error('fetch failed', err);
		});
}
callApi(url);

const deleteUser = (event) => {
	let id = event.target.parentNode.getAttribute('id');
	fetch(url + '/' + id, {
		method: 'DELETE'
	}).catch(err => {
		console.error('fetch failed', err);
	});
	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

const editDataUser = (event) => {
	let enableEdit = event.target.parentNode.querySelectorAll('input');
	enableEdit.forEach(el => {
		el.removeAttribute('readonly');
		el.style.border = '1px solid black';
		el.style.cursor = 'default';
	});
	event.target.parentNode.querySelector('.saveBtn').style.display = 'block';
}

const saveDataUser = (event) => {
	let changedUser = event.target.parentNode.querySelectorAll('input');
	let id = event.target.parentNode.getAttribute('id');
	let newDataUser = {
		id: changedUser[0].value,
		name: changedUser[1].value,
		username: changedUser[2].value,
		email: changedUser[3].value,
		address: {
			street: changedUser[4].value,
			suite: changedUser[5].value,
			city: changedUser[6].value,
			zipcode: changedUser[7].value,
			geo: {
				lat: changedUser[8].value,
				lng: changedUser[9].value
			}
		},
		phone: changedUser[10].value,
		website: changedUser[11].value,
		company: {
			name: changedUser[12].value,
			catchPhrase: changedUser[13].value,
			bs: changedUser[14].value
		}
	}
	fetch(url + '/' + id, {
			method: 'PUT',
			body: JSON.stringify(newDataUser),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		})
		.then(response => response.json())
		.then(json => console.log(json))
		.catch(err => {
			console.error('fetch failed', err);
		});

	changedUser.forEach(el => {
		el.setAttribute('readonly', 'readonly');
		el.style.border = 'none';
	});
	event.target.parentNode.querySelector('.saveBtn').style.display = 'none';
}

const goNewPage = (event) => {
	if (event.target.hasAttribute('readonly') && window.location.hash === '') {
		userId = event.target.parentNode.getAttribute('id');
		window.location.hash = 'post';
		document.querySelector('.row').style.display = 'none';
		document.querySelector('.backBtn').style.display = 'block';
		document.querySelector('.postWrap').style.display = 'block';
		userPost(userId);
	} else {
		window.location.hash = '';
		document.querySelector('.row').style.display = 'block';
		document.querySelector('.postWrap').style.display = 'none';
		document.querySelector('.postWrap').innerHTML = '';
		document.querySelector('.backBtn').style.display = 'none';

	}
}

async function userPost(userId) {
	loader.style.display = 'block';
	let responsePost = await fetch(`${url}/${userId}/posts`);
	let responseComments = await fetch(`${url}/${userId}/comments`);
	let dataPosts = await responsePost.json();
	let dataComments = await responseComments.json();
	loader.style.display = 'none';
	createPost(dataPosts, dataComments);
}

const createPost = (dataPosts, dataComments) => {
	for (let i in dataPosts) {

		let block = document.createElement('div');
		block.classList.add('post');
		block.innerHTML +=
			`User id: ${dataPosts[i].userId} 
        Post id: ${dataPosts[i].id}
        <h3>${dataPosts[i].title}</h3>
        <p>${dataPosts[i].body}</p>`;
		let wrapComment = document.createElement('div');
		wrapComment.innerHTML += `<h4>Comments</h4>`;

		for (let j in dataComments) {
			if (dataPosts[i].id === dataComments[j].postId) {
				wrapComment.innerHTML +=
					`<div class = 'comment'>
                <p><b>${dataComments[j].name}</b></p>
                <p><b>${dataComments[j].email}</b></p>
                <p><i>${dataComments[j].body}</i></p>
                </div>`;
			}
		}
		block.append(wrapComment);
		document.querySelector('.postWrap').append(block);
	}
}