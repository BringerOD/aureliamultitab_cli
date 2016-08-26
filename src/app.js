

export class App {
  configureRouter(config, router) {
     
    config.map([
      { route: ['', 'shell/:section/:viewmodel/:id'], name: 'shell',      moduleId: 'shell',      nav: false, title: 'shell' }
      
    ]);

    this.router = router;
  }
}
