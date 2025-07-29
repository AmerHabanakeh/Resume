import { Component, ElementRef, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.router.navigate(['/dashboard'])
    }
  }

    particlesContainer = viewChild<ElementRef<HTMLDivElement>>('particles');
  
    ngAfterViewInit() {
      this.insertParticles();
    }
  
    insertParticles(){
      const particlesContainer = this.particlesContainer()?.nativeElement;
      const particleCount = 20;
  
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
  
        // Random size between 50px and 200px
        const size = Math.random() * 150 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
  
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
  
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;
  
        particlesContainer?.appendChild(particle);
      }
  
    }

}
