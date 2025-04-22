// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
  
  // FAQ accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      answer.classList.toggle('active');
      
      // Atualiza o ícone
      const icon = this.querySelector('.faq-icon');
      if (icon) {
        if (answer.classList.contains('active')) {
          icon.textContent = '-';
        } else {
          icon.textContent = '+';
        }
      }
    });
  });
  
  // Popup de captura de email
  setTimeout(function() {
    const popupShown = localStorage.getItem('popup_shown');
    const now = Date.now();
    
    if (!popupShown || (now - parseInt(popupShown)) > 86400000) {
      const popup = document.querySelector('.popup-overlay');
      if (popup) {
        popup.style.display = 'flex';
      }
    }
  }, 5000);
  
  const popupClose = document.querySelector('.popup-close');
  if (popupClose) {
    popupClose.addEventListener('click', function() {
      const popup = document.querySelector('.popup-overlay');
      popup.style.display = 'none';
      localStorage.setItem('popup_shown', Date.now().toString());
    });
  }
  
  // Calculadora de aposentadoria
  const calcButton = document.getElementById('calc-button');
  if (calcButton) {
    calcButton.addEventListener('click', function() {
      const birthDateInput = document.getElementById('birth-date');
      const genderInput = document.getElementById('gender');
      const contributionTimeInput = document.getElementById('contribution-time');
      const monthlyIncomeInput = document.getElementById('monthly-income');
      
      if (birthDateInput && genderInput && contributionTimeInput && monthlyIncomeInput) {
        if (birthDateInput.value && genderInput.value && contributionTimeInput.value && monthlyIncomeInput.value) {
          // Cálculos simplificados para demonstração
          const birthDate = new Date(birthDateInput.value);
          const today = new Date();
          const age = today.getFullYear() - birthDate.getFullYear();
          
          const contributionTime = parseInt(contributionTimeInput.value);
          const monthlyIncome = parseFloat(monthlyIncomeInput.value);
          
          let remainingYears = 0;
          let estimatedBenefit = 0;
          
          if (genderInput.value === 'M') {
            // Homem: 65 anos de idade e 20 anos de contribuição
            remainingYears = Math.max(0, 65 - age);
            if (contributionTime < 20) {
              remainingYears = Math.max(remainingYears, 20 - contributionTime);
            }
          } else {
            // Mulher: 62 anos de idade e 15 anos de contribuição
            remainingYears = Math.max(0, 62 - age);
            if (contributionTime < 15) {
              remainingYears = Math.max(remainingYears, 15 - contributionTime);
            }
          }
          
          // Cálculo simplificado do benefício (60% a 100% da média salarial)
          const contributionFactor = Math.min(1, 0.6 + (contributionTime - 15) * 0.02);
          estimatedBenefit = monthlyIncome * contributionFactor;
          
          // Limitado ao teto do INSS (valor fictício para exemplo)
          const inssLimit = 7507.49;
          estimatedBenefit = Math.min(estimatedBenefit, inssLimit);
          
          // Exibir resultados
          const resultDiv = document.getElementById('calculator-result');
          if (resultDiv) {
            resultDiv.innerHTML = `
              <h4 class="font-bold text-lg mb-2">Resultado da Simulação</h4>
              <p class="mb-2"><span class="font-medium">Tempo restante para aposentadoria:</span> ${remainingYears} anos</p>
              <p class="mb-2"><span class="font-medium">Valor estimado do benefício:</span> R$ ${estimatedBenefit.toFixed(2)}</p>
              <p class="text-sm text-gray-600 mt-4">Esta é apenas uma simulação simplificada. Para uma análise precisa, agende uma consulta com nossas advogadas.</p>
            `;
            resultDiv.classList.add('active');
          }
        }
      }
    });
  }
  
  // Formulário de contato
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio de formulário
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      
      setTimeout(function() {
        alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
        contactForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }, 1500);
    });
  }
  
  // Formulário de captura de email
  const emailCaptureForm = document.getElementById('email-capture-form');
  if (emailCaptureForm) {
    emailCaptureForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulação de envio de formulário
      const submitButton = emailCaptureForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando...';
      
      setTimeout(function() {
        alert('Obrigado por se cadastrar! O guia gratuito foi enviado para seu email.');
        emailCaptureForm.reset();
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        
        const popup = document.querySelector('.popup-overlay');
        if (popup) {
          popup.style.display = 'none';
        }
        
        localStorage.setItem('popup_shown', Date.now().toString());
      }, 1500);
    });
  }
});
