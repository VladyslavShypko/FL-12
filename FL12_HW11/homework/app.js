const structure = [
    {
        'folder': true,
        'title': 'Films',
        'children': [
            {
                'title': 'Iron Man.avi'
        },
            {
                'folder': true,
                'title': 'Fantasy',
                'children': [
                    {
                        'title': 'The Lord of the Rings.avi'
            },
                    {
                        'folder': true,
                        'title': 'New folder 1',
                        'children': false
            }
          ]
        }
      ]
    },
    {
        'folder': true,
        'title': 'Documents',
        'children': [
            {
                'folder': true,
                'title': 'EPAM Homework answers',
                'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

let ul = document.createElement('ul');

function createTree(structure, ul) {
    structure.forEach((item) => {
        let li = document.createElement('li');
        if (item.folder) {
            li.innerHTML = `<span class="container"><i class="material-icons">folder</i>${item.title}</span>`;
            ul.append(li);
            if (item.children) {
                let ulChildren = document.createElement('ul');
                ulChildren.classList.add('folder-close');
                item.children.forEach((i) => {
                    if (i.folder) {
                        createTree(item.children, ulChildren);
                        li.append(ulChildren);
                    } else {
                        let liText = document.createElement('li');
                        liText.innerHTML = `<span class="checked"><i class="material-icons file">`+
                        `insert_drive_file</i>${i.title}</span>`;
                        ulChildren.append(liText);
                        li.append(ulChildren);
                    }
                });
            } else {
                let p = document.createElement('p');
                p.innerHTML = '<i>Folder is empty</i>';
                p.classList.add('folder-empty');
                p.classList.add('margin');
                ul.append(p);
            }
        }
    });
}
createTree(structure, ul);
rootNode.append(ul);

rootNode.onclick = (event) => {
    let folderIsEmpty = event.target.closest('span').parentElement.querySelector('ul');
    if (folderIsEmpty) {
        folderIsEmpty.classList.toggle('folder-close');
    } else if (event.target.closest('span').className !== 'checked') {
        event.target.closest('ul').querySelector('p').classList.toggle('folder-empty');
    }
    if (event.target.closest('span').parentElement.querySelector('ul').className !== 'folder-close') {
        event.target.closest('span').querySelector('i').innerHTML = 'folder_open';
    } else {
        event.target.closest('span').querySelector('i').innerHTML = 'folder';
    }
};



