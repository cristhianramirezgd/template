    <?php require_once("subtemplates/head.php"); ?>
    <?php require_once("subtemplates/styles.php"); ?>
    <div>
      <?php require_once("subtemplates/header.php"); ?>
    </div>
    <main>
   <!-- header -->
   <div class="is-fixed-top bg-white">
   	    <!-- topbar -->
   	    <div class="nav navbar is-hidden-mobile text-brown top-nav background-null-color z-index-initial">
   	      <div class="container-fluid setting-toggle">
   	        <div class="nav-left">
   	          <div class="nav-left nav-menu">
   	            <a href="#" class="nav-item"> Venta Telefónica</a>
   	            <a href="#" class="nav-item"><i class="fa fa-mobile" aria-hidden="true"></i>Cel: +57 (350) 555 1060 </a>
   	            <!-- <a href="#" class="nav-item"><i class="fa fa-mobile" aria-hidden="true"></i>Tel: +57 (1) 654 07 60 </a> -->
   	            <a href="#" class="nav-item"><i class="fa fa-whatsapp" aria-hidden="true"></i>Whatsapp: +57 (317) 663 8983 </a>
   	          </div>
   	        </div>
   	        <div class="nav-right nav-menu social-icon">
				<vtex.cmc:whatsapp />
				<a href="#" class="nav-item icon"><i class="fa fa-instagram" aria-hidden="true"></i></a>
				<a href="#" class="nav-item icon"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
				<a href="#" class="nav-item icon"><i class="fa fa-twitter" aria-hidden="true"></i></a>
				<a href="#" class="nav-item icon"><i class="fa fa-facebook" aria-hidden="true"></i></a>
				<ul class="dropdown">
					<li class="is-desktop-true-nav"><i class="fa fa-user" aria-hidden="true"></i>Cuenta
						<ul class="toogle-dropdown ">
						    <li><a href=""><vtex.cmc:welcomeMessage/></a></li>
							<li><a href="/logout">Salir</a></li>
							<li><a href="/account">Cuenta</a></li>
						</ul>	
					</li>
				</ul>
   	        </div>
   	      </div>
   	    </div>
   	    <!-- navbar -->
   	    <div class="nav navbar background-null-color z-index-9">
   	      <div class="container">
   	        <div class="nav-right nav-menu">
   	          <div class="searchbox">
   	              <vtex.cmc:fullTextSearchBox/>
   	          </div> 
   	          <div class="carrito">
   	            <a href="/checkout/#/cart">    
   	            <vtex.cmc:AmountItemsInCart/>
   	            </a>
   	              <vtex.cmc:miniCart/>
   	          </div> 
   	        </div>
   	      </div>
   	    </div>
   		<!-- navbar -->
   		<div class="nav has-shadow navbar bg-red max-height z-index-initial">
   		  <div class="container">
   		  <span class="nav-toggle navigation">
   		    <span></span>
   		    <span></span>
   		    <span></span>
   		  </span>
   		    <div class="nav-logo">
				<a class="logo logo-area" id="toggle-logo" href="/">
   		     		<img src="/arquivos/monkey-market-juguetes-logo.png" alt="Monkey Market Tienda de Juguetes" />
				</a>
   		    </div>
   		    <span class="nav-toggle settings-nav">
   		      <span></span>
   		      <span></span>
   		      <span></span>
   		    </span>
   		    <div class="nav-menu nav-right center-nav" id="mm-megamenu">
   		      <a href="/bebe" class="nav-item">Bebé</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/bebe">Bebé</a></li>
   				      	      	<!-- <li><a href="/bebe/teteros-y-alimentacion">Teteros y Alimentación</a></li> -->
   				      	      	<li><a href="/bebe/sonajeros">Sonajeros</a></li>
   				      	      	<li><a href="/bebe/musicales-y-sonidos">Musicales y Sonidos</a></li>
                                 <li><a href="/bebe/didactico-y-aprendizaje">Didáctico y aprendizaje</a></li>
                                 <li><a href="/bebe/moviles">Móviles</a></li>
                                 <li><a href="/bebe/gimnasios-y-tapetes">Gimnasios y Tapetes</a></li>
                                 <!-- <li><a href="/bebe/coches-y-otros">Coches y Otros</a></li> -->
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	    
   				      	  </div>
   				      	  <div class="column">
   				      	      
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		      <a href="/preschool" class="nav-item">Preschool</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/preschool">Preschool</a></li>
   				      	      	<li><a href="/preschool/didactico-y-aprendizaje">Didáctico y aprendizaje</a></li>
   				      	      	<li><a href="/preschool/armables">Armables</a></li>
   				      	      	<li><a href="/preschool/para-montar">Para Montar</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/preschool">Preschool</a></li>
  				      	      	<!-- <li><a href="#">Arte y Manualidades</a></li> -->
   				      	      	<li><a href="/preschool/instrumentos-musicales">Instrumentos Musicales</a></li>
   				      	      	<li><a href="/preschool/juegos-al-aire-libre">Juegos al Aire Libre</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/preschool">Preschool</a></li>
                                <li><a href="/preschool/para-el-agua">Para el Agua</a></li>
   				      	      	<li><a href="/preschool/personajes">Personajes</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		      <a href="/ninas" class="nav-item">Niñas</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/ninas">Niñas</a></li>
   				      	      	<li><a href="/ninas/munecas-y-bebes">Muñecas y Bebés</a></li>
   				      	      	<li><a href="/ninas/fashion">Fashion</a>
   				      	      	    <ul class="vertical-subcat">
   				      	      	        <li><a href="/ninas/fashion/cabello">Cabello</a></li>
   				      	      	        <li><a href="/ninas/fashion/uñas">Uñas</a></li>
   				      	      	        <li><a href="/ninas/fashion/maquillaje">Maquillaje</a></li>
   				      	      	        <li><a href="/ninas/fashion/accesorios">Accesorios</a></li>
   				      	      	        <li><a href="/ninas/fashion/otros">Otros</a></li>
   				      	      	    </ul>
   				      	      	</li>
   				      	      	<li><a href="#">Vehículos Eléctricos</a></li>
   				      	      	<li><a href="/ninas/para-montar">Para Montar</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/niñas">Niñas</a></li>
   				      	      	<li><a href="/ninas/princesas-y-principes">Princesas y Príncipes</a></li>
   				      	      	<li><a href="/ninas/escenarios-y-juegos-de-rol">Escenarios y Juegos de Rol</a></li>
   				      	      	<!-- <li><a href="#">Instrumentos Musicales</a></li> -->
   				      	      	<li><a href="/ninas/peluches">Peluches</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/niñas">Niñas</a></li>
                                <li><a href="/ninas/carpas">Carpas</a></li>
   				      	      	<li><a href="/ninas/lanzadores">Lanzadores</a></li>
   				      	      	<li><a href="/ninas/outdoors">Outdoors</a></li>
   				      	      	<li><a href="/ninas/personajes">Personajes</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		      <a href="/ninos" class="nav-item">Niños</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/ninos">Niños</a></li>
   				      	      	<li><a href="/ninos/carros">Carros</a>
   				      	      	    <ul class="vertical-subcat">
   				      	      	        <li><a href="/ninos/carros/construccion">Construcción</a></li>
   				      	      	        <li><a href="/ninos/carros/grandes">Grandes Carros</a></li>
   				      	      	        <li><a href="/ninos/carros/armables">Armables</a></li>
   				      	      	        <li><a href="/ninos/carros/funciones">De Funciones</a></li>
   				      	      	        <li><a href="/ninos/carros/friccion">De Fricción</a></li>
   				      	      	        <li><a href="/ninos/carros/impulso">De Impulso</a></li>
   				      	      	        <li><a href="/ninos/carros/coleecion">De Colección</a></li>
   				      	      	    </ul>
   				      	      	</li>
   				      	      	<li><a href="/ninos/control-remoto">Control Remoto</a></li>
   				      	      	<!-- <li><a href="#">Vehículos Eléctricos</a></li> -->
   				      	      	<li><a href="/ninos/para-montar">Para Montar</a></li>
   				      	      	
   				      	      	
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/ninos">Niños</a></li>
   				      	      	<li><a href="/niños/bloques-armables">Bloques y Armables</a></li>
   				      	      	<li><a href="/niños/lanzadores">Lanzadores</a>
   				      	      	    <ul class="vertical-subcat">
   				      	      	        <li><a href="/ninos/lanzadores/nerf">Nerf</a></li>
   				      	      	        <li><a href="/ninos/lanzadores/nerf-agua">Nerf Agua</a></li>
   				      	      	        <li><a href="/ninos/lanzadores/water-booster">Water Booster</a></li>
   				      	      	        <li><a href="/ninos/lanzadores/novedades">Novedades</a></li>
   				      	      	    </ul>
   				      	      	</li>
   				      	      	<li><a href="/ninos/carpas">Carpas</a></li>
   				      	      	<li><a href="/ninos/escenarios-y-juegos-de-rol">Escenarios y Juegos de Rol</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/ninos">Niños</a></li>
   				      	      	<li><a href="/ninos/pistas-estaciones-y-parqueaderos">Pistas, Estaciones y Parqueaderos</a></li>
   				      	      	<li><a href="/ninos/outdoors">Outdoors</a></li>
   				      	      	<li><a href="/ninos/personajes">Personajes</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   				      <!-- .megamenu -->
   		      <a href="/jovenes" class="nav-item">Jóvenes</a>
   		         		      <!-- categoria -->
   		    <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/jovenes">Jóvenes</a></li>
   				      	      	<li><a href="/jovenes/relojes">Relojes</a></li>
   				      	      	<li><a href="/jovenes/tecnologia">Tecnología</a>
   				      	      	    <ul class="vertical-subcat">
   				      	      	        <li><a href="/jovenes/tecnologia/control-remoto">Control Remoto</a></li>
   				      	      	        <li><a href="/jovenes/tecnologia/drones">Drones</a></li>
   				      	      	    </ul>
   				      	      	</li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/jovenes">Jóvenes</a></li>
   				      	      	<li><a href="/jovenes/gamers">Gamers</a>
   				      	      	    <ul class="vertical-subcat">
   				      	      	        <li><a href="/jovenes/gamers/consolas">Consolas</a></li>
   				      	      	        <li><a href="/jovenes/gamers/videojuegos">Videojuegos</a></li>
   				      	      	        <li><a href="/jovenes/gamers/accesorios">Accesorios</a></li>
   				      	      	    </ul>
   				      	      	</li>
   				      	      	<li><a href="/jovenes/morrales">Morrales</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/jovenes">Jóvenes</a></li>
   				      	      	<li><a href="/jovenes/camping">Camping</a></li>
   				      	      	<li><a href="/jovenes/hobby">Hobby</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div>
   		        	<!-- .megamenu -->
   		      <a href="/juegos-de-mesa" class="nav-item">Juegos de Mesa</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/juegos-de-mesa">Juegos de Mesa</a></li>
   				      	      	<li><a href="/juegos-de-mesa/good-games">Good Games</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/juegos-de-mesa">Juegos de Mesa</a></li>
   				      	      	<li><a href="/juegos-de-mesa/hasbro-gaming">Hasbro Gaming</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/juegos-de-mesa">Juegos de Mesa</a></li>
   				      	      	<li><a href="/juegos-de-mesa/novedades">Novedades</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		      <a href="/arte-y-manualidades" class="nav-item">Arte y Manualidades</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/arte-y-manualidades">Arte y Manualidades</a></li>
   				      	      	<li><a href="/arte-y-manualidades/plastilina">Plastilina</a>
   				      	      	    <ul class="vertical-subcat">
   				      	      	        <li><a href="/arte-y-manualidades/plastilina/fun-dough">Fun Dough</a></li>
   				      	      	        <li><a href="/arte-y-manualidades/plastilina/play-doh">Play-Doh</a></li>
   				      	      	    </ul>
   				      	      	</li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/arte-y-manualidades">Arte y Manualidades</a></li>
   				      	      	<li><a href="/arte-y-manualidades/plastilina/arte-y-color">Arte y Color</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="/arte-y-manualidades">Arte y Manualidades</a></li>
   				      	      	<li><a href="/arte-y-manualidades/plastilina/novedades">Novedades</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
           	 
   		        	<!-- .megamenu -->
   		      <a href="#" class="nav-item">¡Lo Último!</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Bebé</a></li>
   				      	      	<li><a href="#">Teteros y Alimentación</a></li>
   				      	      	<li><a href="#">Sonajeros</a></li>
   				      	      	<li><a href="#">Musicales y Sonidos</a></li>
   				      	      	<li><a href="#">Didáctico y aprendizaje</a></li>
   				      	      	<li><a href="#">Móviles</a></li>
   				      	      	<li><a href="#">Gimnasios y Tapetes</a></li>
   				      	      	<li><a href="#">Coches y Otros</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Categoría</a></li>
   				      	      	<li><a href="#">items 2</a></li>
   				      	      	<li><a href="#">items 3</a></li>
   				      	      	<li><a href="#">items 4</a></li>
   				      	      	<li><a href="#">items 5</a></li>
   				      	      	<li><a href="#">items 6</a></li>
   				      	      	<li><a href="#">items 7</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Categoría</a></li>
   				      	      	<li><a href="#">items 2</a></li>
   				      	      	<li><a href="#">items 3</a></li>
   				      	      	<li><a href="#">items 4</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		      <a href="#" class="nav-item">¿Qué Regalar?</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Bebé</a></li>
   				      	      	<li><a href="#">Teteros y Alimentación</a></li>
   				      	      	<li><a href="#">Sonajeros</a></li>
   				      	      	<li><a href="#">Musicales y Sonidos</a></li>
   				      	      	<li><a href="#">Didáctico y aprendizaje</a></li>
   				      	      	<li><a href="#">Móviles</a></li>
   				      	      	<li><a href="#">Gimnasios y Tapetes</a></li>
   				      	      	<li><a href="#">Coches y Otros</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Categoría</a></li>
   				      	      	<li><a href="#">items 2</a></li>
   				      	      	<li><a href="#">items 3</a></li>
   				      	      	<li><a href="#">items 4</a></li>
   				      	      	<li><a href="#">items 5</a></li>
   				      	      	<li><a href="#">items 6</a></li>
   				      	      	<li><a href="#">items 7</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Categoría</a></li>
   				      	      	<li><a href="#">items 2</a></li>
   				      	      	<li><a href="#">items 3</a></li>
   				      	      	<li><a href="#">items 4</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		      <a href="#" class="nav-item final-item">¡Monkey Sale!</a>
   		         		      <!-- categoria -->
   		      <!-- megamenu -->
   				      <div class=" mega bg-blue-alpha shadow">
   				      	<div class="columns mega-menu">
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Bebé</a></li>
   				      	      	<li><a href="#">Teteros y Alimentación</a></li>
   				      	      	<li><a href="#">Sonajeros</a></li>
   				      	      	<li><a href="#">Musicales y Sonidos</a></li>
   				      	      	<li><a href="#">Didáctico y aprendizaje</a></li>
   				      	      	<li><a href="#">Móviles</a></li>
   				      	      	<li><a href="#">Gimnasios y Tapetes</a></li>
   				      	      	<li><a href="#">Coches y Otros</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Categoría</a></li>
   				      	      	<li><a href="#">items 2</a></li>
   				      	      	<li><a href="#">items 3</a></li>
   				      	      	<li><a href="#">items 4</a></li>
   				      	      	<li><a href="#">items 5</a></li>
   				      	      	<li><a href="#">items 6</a></li>
   				      	      	<li><a href="#">items 7</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column">
   				      	      <ul class="vertical">
   				      	      	<li class="vertical-item"><a href="#">Categoría</a></li>
   				      	      	<li><a href="#">items 2</a></li>
   				      	      	<li><a href="#">items 3</a></li>
   				      	      	<li><a href="#">items 4</a></li>
   				      	      </ul>
   				      	  </div>
   				      	  <div class="column is-one-third is-hidden-mobile">
   				      		<figure>
   				      			<img src="/arquivos/monkey-market-shop-banner-megamenu.png" alt="sale monkey market" />
   				      		</figure>
   				      		</div>
   				      	</div>
   				      </div> 
   		        	<!-- .megamenu -->
   		    </div>
   		  </div>
   		</div>

   </div>
   <!-- header -->
    </main>
        <div>
          <?php require_once("subtemplates/footer.php"); ?>
        </div>

        <?php require_once("subtemplates/scripts.php"); ?>
        <!-- <script>$('.portal-totalizers-ref').minicart({ showMinicart: false, showTotalizers: true, showShippingOptions: false });</script> -->
<!-- <script>$('.portal-minicart-ref').minicart({ showMinicart: true, showTotalizers: false  , showShippingOptions: false });</script> -->
      </body>
    </html>