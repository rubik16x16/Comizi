import { CategoriasRoutingModule } from './categorias-routing.module';

describe('CategoriasRoutingModule', () => {
  let categoriasRoutingModule: CategoriasRoutingModule;

  beforeEach(() => {
    categoriasRoutingModule = new CategoriasRoutingModule();
  });

  it('should create an instance', () => {
    expect(categoriasRoutingModule).toBeTruthy();
  });
});
