<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <!-- <div class="bg-gray-300">
    <div class="max-w-4xl mx-auto mb-5 px-4">
      <h1 class="text-3xl py-10"><a href="<?php # echo get_home_url(); ?>" class="hover:text-blue-500">Welcome To Our Header!</a></h1>
    </div>
  </div> -->

  <div id="root"></div>

  <!-- <div class="max-w-4xl mx-auto px-4">
    <div class="prose max-w-full">
      <?php if (have_posts()) {
        while (have_posts()) {
          the_post(); ?>
          <div>
            <h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
            <?php the_content(); ?>
          </div>
      <?php }
      } ?>
    </div>
  </div> -->
  <!-- <div class="border-t mt-4 py-4">
    <div class="max-w-4xl px-4 mx-auto text-xs text-gray-400">Your footer content here.</div>
  </div> -->

  <?php wp_footer(); ?>
</body>

</html>