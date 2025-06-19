// Função para mostrar/ocultar o menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('nav');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
  
  // Funcionalidade para o FAQ
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const icon = question.querySelector('.faq-icon');
      
      // Toggle answer visibility
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.textContent = '+';
      } else {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '-';
      }
    });
  });
  
  // Calculadora de Aposentadoria (Simulação básica)
  const calcButton = document.getElementById('calc-button');
  if (calcButton) {
    calcButton.addEventListener('click', function() {
      const birthDate = document.getElementById('birth-date').value;
      const gender = document.getElementById('gender').value;
      const contributionTime = parseInt(document.getElementById('contribution-time').value);
      const monthlyIncome = parseFloat(document.getElementById('monthly-income').value);
      
      if (!birthDate || !gender || isNaN(contributionTime) || isNaN(monthlyIncome)) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
      }
      
      // Calcular idade
      const today = new Date();
      const birthDateObj = new Date(birthDate);
      let age = today.getFullYear() - birthDateObj.getFullYear();
      const monthDiff = today.getMonth() - birthDateObj.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
      }
      
      // Simulação básica
      let result = '';
      let requiredAge = gender === 'M' ? 65 : 62;
      let requiredContribution = 15;
      
      // Verificar regra de transição
      if (contributionTime >= 15) {
        const yearsToRetirement = Math.max(0, requiredAge - age);
        const estimatedBenefit = Math.min(monthlyIncome * 0.6, 7507.49); // 60% do salário, limitado ao teto do INSS
        
        result = `
          <h3>Resultado da Simulação</h3>
          <p><strong>Idade atual:</strong> ${age} anos</p>
          <p><strong>Tempo de contribuição:</strong> ${contributionTime} anos</p>
          <p><strong>Idade mínima necessária:</strong> ${requiredAge} anos</p>
          <p><strong>Tempo para aposentadoria:</strong> ${yearsToRetirement} anos</p>
          <p><strong>Benefício estimado:</strong> R$ ${estimatedBenefit.toFixed(2)}</p>
          <p class="disclaimer">Esta é apenas uma simulação básica. Para uma análise completa e personalizada, entre em contato com nossos especialistas.</p>
        `;
      } else {
        result = `
          <h3>Resultado da Simulação</h3>
          <p>Com base nas informações fornecidas, você ainda precisa contribuir por mais ${requiredContribution - contributionTime} anos para atingir o tempo mínimo de contribuição.</p>
          <p class="disclaimer">Esta é apenas uma simulação básica. Para uma análise completa e personalizada, entre em contato com nossos especialistas.</p>
        `;
      }
      
      document.getElementById('calculator-result').innerHTML = result;
      
      // Evento de conversão para Google Ads
      gtag('event', 'conversion', {'send_to': 'AW-11482096216/COLOQUE_SEU_LABEL'});
      
      // Evento de conversão para Meta Pixel
      fbq('track', 'Lead');
    });
  }
  
  // Popup de Captura de Email
  const popupOverlay = document.querySelector('.popup-overlay');
  const popupClose = document.querySelector('.popup-close');
  const emailCaptureForm = document.getElementById('email-capture-form');
  
  if (popupOverlay && popupClose) {
    // Mostrar popup após 5 segundos
    setTimeout(() => {
      popupOverlay.style.display = 'flex';
    }, 5000);
    
    // Fechar popup
    popupClose.addEventListener('click', () => {
      popupOverlay.style.display = 'none';
    });
    
    // Fechar popup ao clicar fora
    popupOverlay.addEventListener('click', (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = 'none';
      }
    });
  }
  
  // Formulário de captura de email
  if (emailCaptureForm) {
    emailCaptureForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nome = document.getElementById('popup-nome').value;
      const email = document.getElementById('popup-email').value;
      const telefone = document.getElementById('popup-telefone').value;
      
      if (!nome || !email) {
        alert('Por favor, preencha os campos obrigatórios.');
        return;
      }
      
      // Aqui você pode adicionar o código para enviar os dados para seu servidor
      // Por enquanto, apenas simulamos o envio
      
      popupOverlay.innerHTML = `
        <div class="popup-container">
          <div class="popup-title">
            <h3>Obrigado!</h3>
            <p>Seu guia foi enviado para o email ${email}. Verifique sua caixa de entrada.</p>
          </div>
          <button class="btn-primary" onclick="document.querySelector('.popup-overlay').style.display='none'">Fechar</button>
        </div>
      `;
      
      // Evento de conversão para Google Ads
      gtag('event', 'conversion', {'send_to': 'AW-11482096216/COLOQUE_SEU_LABEL'});
      
      // Evento de conversão para Meta Pixel
      fbq('track', 'Lead');
    });
  }
  
  // Formulário de contato
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const telefone = document.getElementById('telefone').value;
      const assunto = document.getElementById('assunto').value;
      const mensagem = document.getElementById('mensagem').value;
      
      if (!nome || !email || !telefone || !assunto || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
      
      // Aqui você pode adicionar o código para enviar os dados para seu servidor
      // Por enquanto, apenas simulamos o envio
      
      alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      contactForm.reset();
      
      // Evento de conversão para Google Ads
      gtag('event', 'conversion', {'send_to': 'AW-11482096216/COLOQUE_SEU_LABEL'});
      
      // Evento de conversão para Meta Pixel
      fbq('track', 'Lead');
    });
  }
});

