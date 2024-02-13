import squirrel from '$lib/assets/squirrel.jpg';
export let exercises = [
	{
		name: 'Box Model',
		code: `<h1>Box Model</h1>
<div></div>

<style>
  div {
    width: 400px;
    height: 200px
  }
</style>`
	},
	{
		name: 'Flexbox',
		code: `<h1>Flexbox</h1>
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
</div>

<!-- <nav>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</nav> -->

<style>
</style>`
	},
	{
		name: 'Position',
		code: `<div class="image">
  <img src="${squirrel}" alt="squirrel photo">
  <div class="image_text">Photo of a squirrel</div>
</div>`
	},
	{
		name: 'Transitions',
		code: `<div class="box">Hover over me</div>

<style>
  .box {
    width: 200px;
    height: 100px;
    border: 4px solid black;
    text-align: center;
    background-color: lightblue;
    color: orangered;
  }
  .box:hover {
    background-color: orangered;
    color: lightblue;
  }
</style>`
	}
];
