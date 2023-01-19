class Background {
  private stars: Star[];
  private atmosphere: Atmosphere;
  private earth: Earth;

  constructor() {
    this.stars = [];
    for (let i = 0; i < 1000; i++) {
      this.stars[i] = new Star();
    }

    this.atmosphere = new Atmosphere();
    this.earth = new Earth();
  }

  public update() {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].fall();
    }

    this.atmosphere.update();
    this.earth.update();
  }

  public draw() {
    background(0);
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].show();
    }

    this.atmosphere.draw();
    this.earth.draw();
  }
}
