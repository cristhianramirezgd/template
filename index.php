    <?php require_once("subtemplates/head.php"); ?>
    <?php require_once("subtemplates/styles.php"); ?>
    <?php require_once("subtemplates/header.php"); ?>
    <main class="mundo-saludable-v2">
      <section class="wrapper container-main-full bg-banner section-viewport-h main-grid main-grid-1 main-grid-center main-grid-middle">
        <img class="bg-img" src="/arquivos/banner-home-mundo-saludable.jpg" alt="banner-home-mundo-saludable"/>
          <div class="container-main container-banner main-grid main-grid-3 main-grid-center main-grid-middle">
            <div class="container font-reclame">
              <h1 class="title-site-ms">Mundo-saludable – Tiendas Jumbo</h1>
              <h2 class="text-center text-left-m">Encuentra productos que te ayudarán a tener una adecuada alimentación y una vida más sana.</h2>
            </div>
            <div class="container">
              <img  class="logo-mundo-saludable" src="arquivos/logo-mundosaludable.png" alt="logo-mundosaludable tiendas jumbo" />
              <div class="form-newsletter card-ms">
                <h5 class="text-label font-bold">Déjanos tu mail y mantente conectado con Mundo Saludable.</h5>
                <form class="main-form newsletter-ms">
                  <button class="button-ms button-ms-green-line" type="submit">Enviar</button>
                  <input class="jumbogreenyellow" id="newsletter-mundo-saludable" type="email" placeholder="Example@mail.com"/>
                  <span class="text-jumbored" style="display:none;">Formato de email incorrecto</span>
                  <span class="bg-jumbored text-white" style="display:none;">Error al enviar, intente de nueco más tarde</span>
                  <div class="legal-check">
                    <input type="checkbox" name="terms-ms" value="terms"> <small><a data-src="#terms-conditions-ms" href="javascript:;" class="terms-ms">Acepto Términos y Condiciones</a></small>
                  </div>
                </form>
              </div>
            </div>
            <div class="container"></div>
          </div>
          <div class="container-main main-grid main-grid-3 main-grid-equal">
              <div class="card-ms card-ms-button card-ms-button-1 text-center-m">
                <a href="">
                  <h3>Yo Puedo</h3>
                  <p>tener una dieta con algún tipo de restricción</p>
                </a>
              </div>
              <div class="card-ms card-ms-button card-ms-button-2 text-center-m">
                <a href="">
                  <h3>Yo Decidí</h3>
                  <p>llevar  un estilo de vida con alimentos saludables.</p>
                </a>
              </div>
              <div class="card-ms card-ms-button card-ms-button-3 text-center-m">
                <a href="">
                  <h3>Yo Quiero</h3>
                  <p>Quiero cumplir algún objetivo puntual  <small>como una dieta para bajar de peso.</small> </p>
                </a>
              </div>
          </div>
      </section>
    </main>
    <!-- terms&conditions -->
    <div style="display: none;" id="terms-conditions-ms">
      <div class="container">
        <h4>Términos y Condiciones</h4>
        <small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat consequuntur voluptatibus atque illo, tenetur? Sequi maxime accusantium natus, ex eligendi consequatur neque voluptates itaque quod odit ipsa quam vitae asperiores dolor in, aut hic adipisci quidem a perferendis? Dicta, repellat dolores repellendus at itaque sequi libero consectetur ab quibusdam porro iure quae cupiditate cum voluptates, consequuntur totam laboriosam optio est omnis inventore culpa, sit velit. Quam aut hic aliquam molestiae et doloribus, sunt, minus ipsum fuga dignissimos repellat odit quae nesciunt neque aliquid repudiandae eligendi saepe laboriosam optio sequi minima, explicabo id voluptatem rem nemo! Rem ab et sunt earum, ad maiores quasi eligendi vel facere, illum voluptatum dignissimos cumque reprehenderit adipisci obcaecati nisi cupiditate. Voluptate id temporibus consequatur, autem nihil illum non modi a, sint odit, natus cumque iure! Nulla inventore reprehenderit dolores eligendi, repellat, ex eius, praesentium dignissimos omnis odio, deleniti aliquam quisquam soluta minus veniam obcaecati enim officia. Molestias alias veritatis corporis nam maxime qui adipisci. Enim, porro, voluptas itaque eos nemo laborum. Adipisci fugit omnis saepe maiores consequatur non voluptates iure vero, earum nam placeat temporibus impedit dolor nulla corporis excepturi alias, sint repudiandae praesentium voluptatem vitae commodi! Aliquid autem optio veritatis exercitationem eaque eos alias.</small>
      </div>
    </div>
    <!-- .terms&conditions -->
    <?php require_once("subtemplates/footer.php"); ?>
    <?php require_once("subtemplates/scripts.php"); ?>
    <script type="text/javascript" src="https://jumbocolombiafood.vtexcommercestable.com.br/arquivos/jquery.fancybox.min.js" charset="utf8"></script>
    <script type="text/javascript">
      // fancy box
            $('.terms-ms').fancybox({
             protect: true,
             touch: false
              });
    </script>
  </body>
</html>
