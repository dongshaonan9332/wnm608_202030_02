<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CSS Styleguide</title>

	<meta name="viewport" content="width=device-width">

	<link rel="stylesheet" href="../lib/css/styleguide.css">
	<link rel="stylesheet" href="../lib/css/gridsystem.css">
	<link rel="stylesheet" href="../css/storetheme.css">
</head>
<body>

	<header class="container">
		<div class="card">
			<h1>CSS Style Guide</h1>
		</div>
	</header>

	<div class="container">
		<h2>Table of Contents</h2>

		<ul>
			<li><a href="#typography">Typography</a></li>
			<ul>
				<li><a href="#headings">Headings</a></li>
				<li><a href="#paragraphs">Paragraphs</a></li>
			</ul>
			<li><a href="#images">Images</a></li>
			<li><a href="#cards">Cards</a></li>
			<li><a href="#viewwindow">View Window</a></li>
			<li><a href="#navigations">Navigations</a></li>
			<ul>
				<li><a href="#navs">Navs</a></li>
				<li><a href="#navbar">Navbar</a></li>
			</ul>
			<li><a href="#tables">Tables</a></li>
			<li><a href="#forms">Forms</a></li>
			<li><a href="#checboxes">Checkboxes</a></li>
			<li><a href="#grid">Grid System</a></li>
			<li><a href="#flex">Flex System</a></li>
		</ul>
	</div>

	<hr>

	<section id="typography" class="container">
		<h2>Typography</h2>

		
		<div class="card">
			<h3 id="headings">Headings</h3>
			<!-- h$*6>{Heading $} -->
			<h1>Heading 1</h1>
			<h2>Heading 2</h2>
			<h3>Heading 3</h3>
			<h4>Heading 4</h4>
			<h5>Heading 5</h5>
			<h6>Heading 6</h6>
		</div>

		<code>
&lt;h1>Heading 1&lt;/h1>
&lt;h2>Heading 2&lt;/h2>
&lt;h3>Heading 3&lt;/h3>
&lt;h4>Heading 4&lt;/h4>
&lt;h5>Heading 5&lt;/h5>
&lt;h6>Heading 6&lt;/h6>
		</code>


		<div class="card">
			<h3 id="paragraphs">Paragraphs</h3>
			<!-- p*3>lorem40 -->
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus harum numquam, ullam quisquam maiores voluptas reiciendis libero temporibus esse nihil suscipit perspiciatis blanditiis error pariatur autem ea debitis aut vitae, aperiam quas. Odit ad laudantium, doloremque neque! Consequuntur, perspiciatis, modi.</p>
			<p>Repellat aut voluptas sequi odio ipsa possimus, assumenda soluta ad cum excepturi eveniet aliquam deserunt quas, adipisci commodi? In iure, accusamus recusandae, earum commodi fugiat vero ullam et consequuntur temporibus alias repudiandae assumenda inventore, expedita nisi dolores, natus id voluptate.</p>
			<p>Odio esse optio obcaecati excepturi fugiat omnis atque quae nesciunt a! Blanditiis nihil excepturi natus animi adipisci repellat praesentium voluptates ipsam quidem culpa cum, voluptas obcaecati, recusandae accusantium modi. Ipsam nemo inventore distinctio maxime impedit fugiat facere ducimus minus eius.</p>
		</div>
	</section>

	<section id="navigations" class="container">
		<h2>Navigations</h2>

		<script>
		const makeNav = (classes="") => {
			const links = ["home","store","about"];
			let ran = Math.floor(Math.random()*links.length);
			return `
			<div class="card soft">
			<nav class="${classes}">
				<ul>
					${links.reduce((r,o,i)=>r+`<li ${i===ran?'class="active"':''}>
						<a href="#">${o}</a>
					</li>`,'')}
					
				</ul>
			</nav>
			</div>
			`
		}
		</script>

		<div class="card">
			<h3>Basic Nav</h3>

			<!-- nav.nav>ul>li*3>a[href=#]>{Link $} -->
			<script>document.write(makeNav("nav"))</script>
		</div>

		<div class="card">
			<h3>Flex Nav</h3>

			<script>document.write(makeNav("nav-flex"))</script>
		</div>

		<div class="card">
			<h3>Stretch Nav</h3>

			<script>document.write(makeNav("nav-stretch"))</script>
		</div>

		<div class="card">
			<h3>Pills Nav</h3>

			<script>document.write(makeNav("nav-pills"))</script>
		</div>

		<div class="card">
			<h3>Breadcrumb Nav</h3>

			<script>document.write(makeNav("nav-crumbs"))</script>
		</div>

		<div class="card">
			<h3>Material Tab Nav</h3>

			<script>document.write(makeNav("nav-material"))</script>
		</div>
	</section>


	<section id="tables" class="container">
		<h2>Tables</h2>

		<script>
		// THIS IS JUST FOR EXAMPLES
		const makeTable = (classes='') => {
			const head = ["ID","Office","Name","Email","Phone"];
			const body = [
				["522","Hamilton Cline",	"hcline@academyart.edu",	"555-2424"],
				["512","Fred McHale",		"fmchale@academyart.edu",	"555-2424"],
				["522","Michael Catanzaro",	"jimmycats@academyart.edu",	"555-2424"],
				["514","Andrea Pimentel",	"apimentel@academyart.edu",	"555-2424"],
				["516","DC Scarpelli",		"dscarpelli@academyart.edu","555-2424"]
			].sort(()=>Math.random()-.5);
			return `
			<div class="container">
			<div class="card card-light">
			<table class="${classes}">
				<thead><tr>${head.reduce((r,o)=>r+`<th>${o}</th>`,"")}</tr></thead>
				<tbody>${body.reduce((r,o,i)=>r+
					`<tr>${
						[i+1,...o].reduce((r,o)=>r+`<td>${o}</td>`,"")
					}</tr>`
				,"")}</tbody>
			</table>
			</div>
			</div>
			`;
		}
		</script>



		<div class="card">
			<h3>Basic Table</h3>

			<script>document.write(makeTable("table"))</script>
		</div>

		<div class="card">
			<h3>Striped Table</h3>

			<script>document.write(makeTable("table striped"))</script>
		</div>

		<div class="card">
			<h3>Horizontal Lined Table</h3>

			<script>document.write(makeTable("table lined horizontal"))</script>
		</div>

		<div class="card">
			<h3>Vertical Lined Table</h3>

			<script>document.write(makeTable("table lined vertical"))</script>
		</div>

		<div class="card">
			<h3>Outline Table</h3>

			<script>document.write(makeTable("table lined outline"))</script>
		</div>

		<div class="card">
			<h3>Outlined striped vertical lined Table</h3>

			<script>document.write(makeTable("table striped lined outline vertical"))</script>
		</div>

		<div class="card">
			<h3>Outlined striped vertical lined Table</h3>

			<script>document.write(makeTable("table lined all"))</script>
		</div>
	</section>


	<section id="forms" class="container">
		<h2>Forms</h2>

		<div class="card">
			<h3>Form Input</h3>

			<input type="text" class="form-input" placeholder="Text">
			<input type="password" class="form-input" placeholder="Password">
			<input type="number" class="form-input" placeholder="Number">
			<input type="search" class="form-input" placeholder="Search">
		</div>

		<div class="card">
			<h3>Form Label</h3>

			<label for="input-example1" class="form-label">Example</label>
			<input type="text" class="form-input" placeholder="Text" id="input-example1">

			<label for="input-example2" class="form-label">Example</label>
			<input type="text" class="form-input" placeholder="Text" id="input-example2">

			<label for="input-example3" class="form-label">Example</label>
			<input type="text" class="form-input" placeholder="Text" id="input-example3">
		</div>

		<div class="card">
			<h3>Form Control</h3>

			<div class="form-control">
				<label for="input-example4" class="form-label">Example</label>
				<input type="text" class="form-input" placeholder="Text" id="input-example4">
			</div>

			<div class="form-control">
				<label for="input-example5" class="form-label">Example</label>
				<input type="text" class="form-input" placeholder="Text" id="input-example5">
			</div>

			<div class="form-control">
				<label for="input-example6" class="form-label">Example</label>
				<input type="text" class="form-input" placeholder="Text" id="input-example6">
			</div>
		</div>

		<div class="card">
			<h3>Form Button</h3>

			<div class="form-control">
				<button type="button" class="form-button">Button</button>
			</div>

			<div class="form-control">
				<input type="submit" class="form-button" value="Submit">
			</div>

			<div class="form-control">
				<a href="#" class="form-button">Button</a>
			</div>

			<div class="form-control display-flex">
				<div class="flex-none">
					<a href="#" class="form-button">Prev</a>
				</div>
				<div class="flex-stretch"></div>
				<div class="flex-none">
					<a href="#" class="form-button">Next</a>
				</div>
			</div>
		</div>

		<div class="card">
			<h3>Hotdog</h3>

			<div class="form-control">
				<input type="search" class="hotdog" placeholder="Search">
			</div>

			<div class="form-control">
				<label class="hotdog">
					<div class="flex-none">&clubs;</div>
					<div class="flex-stretch">
						<input type="search" placeholder="Search">
					</div>
				</label>
			</div>

			<div class="form-control display-flex">
				<div class="flex-stretch"></div>
				<input type="search" class="hotdog" placeholder="Search">
			</div>
		</div>
	</section>




	<section id="checkboxes" class="container">
		<h2>Select Dropdown</h2>

		<div class="card">
			<h3>Basic Select</h3>
			<div class="form-select">
				<select>
					<option value="1">Newest</option>
					<option value="2">Oldest</option>
				</select>
			</div>
		</div>
	</section>


	<section id="checkboxes" class="container">
		<h2>Checkboxes</h2>

		<div class="card">
			<h3>Basic Checkbox</h3>

			<div class="form-control">
				<label for="check-example1">Label</label>
				<label>
					<input type="checkbox" id="check-example1">
					Label
				</label>
			</div>

			<h3>Heart Trick</h3>

			<div class="form-control">
				<div class="heart-toggle">
					<input type="checkbox" id="heart-example1" class="hidden">
					<label for="heart-example1">&hearts;</label>
				</div>
			</div>

			<h3>Toggle</h3>

			<div class="form-control">
				<div class="toggle">
					<input type="checkbox" id="toggle1" class="hidden">
					<label for="toggle1"></label>
				</div>
				<div class="toggle" style="font-size:2em">
					<input type="checkbox" id="toggle2" class="hidden">
					<label for="toggle2"></label>
				</div>
			</div>
		</div>
	</section>



	<section id="figures" class="container">
		<h2>Figures</h2>

		<div class="card">
			<h3>Basic Figure</h3>

			<figure class="product-figure">
				<img src="https://via.placeholder.com/300" alt="">
				<figcaption>
					Product
				</figcaption>
			</figure>
		</div>

		<div class="card">
			<h3>Soft Figure</h3>

			<figure class="product-figure soft">
				<img src="https://via.placeholder.com/300" alt="">
				<figcaption>
					Product
				</figcaption>
			</figure>
		</div>

		<div class="card">
			<h3>Overlay Figure</h3>

			<figure class="product-figure overlay">
				<img src="https://via.placeholder.com/300" alt="">
				<figcaption>
					Product
				</figcaption>
			</figure>
		</div>

		<h3>Gridded Figure</h3>
		<div class="grid gap">
			<div class="col-xs-12 col-md-4">

				<figure class="product-figure overlay">
					<img src="https://via.placeholder.com/300" alt="">
					<figcaption>
						Product
					</figcaption>
				</figure>
			</div>
			<div class="col-xs-12 col-md-4">
				<figure class="product-figure soft">
					<img src="https://via.placeholder.com/300" alt="">
					<figcaption>
						Product
					</figcaption>
				</figure>
			</div>
			<div class="col-xs-12 col-md-4">
				<figure class="product-figure">
					<img src="https://via.placeholder.com/300" alt="">
					<figcaption>
						Product
					</figcaption>
				</figure>
			</div>
		</div>

	</section>







	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>

	<script>
	$("[class*='nav'] a").on("click",function(e){
		e.preventDefault();
		$(this).parent().addClass("active")
			.siblings().removeClass("active")
	})
	</script>
	
</body>
</html>