import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { LugarService } from '../lugar.service';
import { Lugar } from '../lugar';

@Component({
  selector: 'app-lugar',
  standalone: false,
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.scss'],
})
export class LugarComponent implements OnInit {
  camposForm: FormGroup;
  categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService,
    private LugarService: LugarService
  ) {
    this.camposForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      categoria: new FormControl('', Validators.required),
      localizacao: new FormControl('', Validators.required),
      urlFoto: new FormControl('', Validators.required),
      avaliacao: new FormControl('', Validators.required),
    });
  }

  salvar() {
    this.camposForm.markAllAsTouched();

    if (this.camposForm.valid) {
      this.LugarService.salvar(this.camposForm.value).subscribe({
        next: (lugar) => {
          console.log('cadastrado com sucesso', lugar);
          this.camposForm.reset();
        },
        error: (erro) => console.error('Ocorreu um erro', erro),
      });
    }
  }

  ngOnInit(): void {
    this.categoriaService.obterTodas().subscribe({
      next: (listarCategorias) => {
        this.categorias = listarCategorias;
      },
    });
  }

  isCampoInvalido(nomeCampo: string): boolean {
    const campo = this.camposForm.get(nomeCampo);
    return campo?.invalid && campo?.touched && campo?.errors?.['required'];
  }
}
