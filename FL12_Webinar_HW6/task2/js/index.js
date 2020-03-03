const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");
let itemsArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
localStorage.setItem('todos', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('todos'))

$(function renderList() {
	let todos = $.parseJSON(localStorage.getItem('todos'));
	for (let items in todos) {
		$list.todolist(todos[items].data, todos[items].done);
	}
});

$.fn.todolist = function (value, chekedComplite) {
	const li = $('<li></li>').addClass('item');
	const span = $('<span></span>').addClass('item-text').text(`${value}`);
	const btnRemove = $('<button></button>').addClass('item-remove').text('Remove').click(remove);
	const btnComplete = $('<button></button>').addClass('item-complete').text('Complete').click(complete);

	if (chekedComplite === 'false') {
		this.prepend(li);
		$(`li`).first().append(span, btnRemove, btnComplete);
	} else {
		this.append(li);
		$(`li:last-of-type`).append(span, btnRemove);
		$(`li:last-of-type span`).addClass('done');
	}
}

$($add).click(() => {
	if ($input.val() !== '') {
		$list.todolist($input.val());
		itemsArray.push({
			'data': $input.val(),
			'done': 'false'
		});
		localStorage.setItem('todos', JSON.stringify(itemsArray));
		$input.val('');
	} else {
		alert('Input can not be empty');
	}
});

function complete() {
	const $span = $($(this).parent()[0]).find('.item-text');
	$span.addClass('done');
	$(this).hide();
	for (let item in itemsArray) {
		if (itemsArray[item].data === $($span[0]).html()) {
			itemsArray[item].done = 'true';
			let temp = itemsArray.splice(item, 1);
			itemsArray.push(temp[0]);
			localStorage.setItem('todos', JSON.stringify(itemsArray));
		}
	};
	$('li:last-of-type').after($(this).parent()[0]);
}

function remove() {
	const $li = $($(this).parent()[0]);
	$li.hide();
	for (let item in itemsArray) {
		if (itemsArray[item].data === $($li).find('.item-text').html()) {
			itemsArray.splice(item, 1);
			localStorage.setItem('todos', JSON.stringify(itemsArray));
		}
	};
}