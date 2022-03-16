import React from 'react';

const Header = () => {
  return <div>
        <header class="d-none d-lg-block" >
            <div class="top-toolbar schema-color-header" >

                <div class="top-toolbar-container" >

                <div class="row no-gutters" >
                    <div class="col-lg-6 col-md-6" >

                        <a class="h-logo" href="https://karsbusiness23.ru" title="Доска объявлений" >
                            <img src="https://karsbusiness23.ru/media/others/96d6f2e7e1f705ab5e59c84a6dc009b2.svg" data-inv="1" width="100px" alt="Доска объявлений"></img>
                        </a>

                        <div  class="toolbar-link open-modal" data-id-modal="modal-geo"  >
                        <span> <i class="las la-map-marker-alt icon-link-middle"></i> Хабаровск</span>
                        </div>

                        <div class="toolbar-link open-big-menu" >
                        {/* <i class="las la-times icon-menu-close icon-link-middle"> внутрь span*/}
                        <span><i class="las la-bars icon-menu-open icon-link-middle"></i> Категории </span>
                        </div>

                        <a class="toolbar-link" href="https://karsbusiness23.ru/blog" >
                        Блог            </a>

                    </div>
                    <div class="col-lg-6 col-md-6 text-right" >


                        <div class="toolbar-button-box" >
                        <a href="https://karsbusiness23.ru/ad/create" class="toolbar-link-button" > Подать объявление </a>
                        </div>


                    <a href="https://karsbusiness23.ru/auth" class="toolbar-link" > <i class="las la-user icon-link"></i> Вход</a>

                    </div>
                </div>

                </div>
            </div>
        </header>
        <header class="d-block d-lg-none" >
            <div class="top-toolbar schema-color-header" >

                <div class="top-toolbar-container" >

                <div class="row no-gutters" >

                    <div class="col-md-2 col-sm-2 col-2" >

                        <a class="h-logo-mobile" href="https://karsbusiness23.ru" title="Доска объявлений" >
                            <img src="https://karsbusiness23.ru/media/others/7122cbc1883583da77fec03a494536c7.svg" data-inv="1" alt="Доска объявлений"></img>
                        </a>

                    </div>
                    <div class="col-md-10 col-sm-10 col-10 text-right" >


                        <a href="#" class="toolbar-link mobile-menu open-modal" data-id-modal="modal-geo" > <i class="las la-map-marker icon-link"></i> </a>
                        {/*  <i class="las la-times icon-link mobile-icon-menu-close"></i> вставить в a снизу */}
                        <a href="#" class="toolbar-link mobile-open-big-menu" > <i class="las la-bars icon-link mobile-icon-menu-open"></i> </a>

                    <a href="https://karsbusiness23.ru/auth" class="toolbar-link" > <i class="las la-user icon-link"></i> Вход</a>

                    </div>

                </div>

                </div>

            </div>
        </header>
  </div>;
};

export default Header;