new Vue({
  el: '#app',
  data: {
    questions: [
      {
        title: 'Quel est votre nom, prénom ou pseudonyme ?',
      },
      {
        title: 'Quelle est votre formation ? quel(s) diplôme(s)?',
      },
      {
        title: 'Est-ce une formation initiale ou une reconversion?',
      },
      {
        title: 'Qu’est-ce qui a guidé votre choix ?',
      },
      {
        title: 'Quel a été votre parcours professionnel ?',
      },
    ],
    Questions2: [
      {
        title: 'Etes-vous freelance ?',
      },
      {
        title: 'Quelle est votre fonction ?',
      },
      {
        title: 'Avez-vous une spécialité ? Laquelle ? Front, Back, Full ?',
      },
      {
        title: 'Quelles sont les perspectives d\'évolution de carrière ?',
      },
      {
        title: 'Quel est votre niveau d\'expérience en développement web ?',
      },
    ],
    Questions3: [
      {
        title: ' Avantages / satisfactions ?',
      },
      {
        title: ' Contraintes / difficultés ?',
      },
      {
        title: ' IA, CHATGPT : utopie ou dystopie ?',
      },
      {
        title: ' Quel est selon vous l’avenir de la profession, l’évolution à court et à moyen terme de votre secteur\n' +
          'd’activité ?',
      },
      {
        title: 'Quels conseils pourriez-vous me donner pour faciliter mon insertion professionnelle ?',
      },
    ],
    Questions4: [
      {
        title: 'Un commentaire ?',
      },
    ],
    answers: [
      '', '', '', '', '',
    ],
    Answers2: [
      '', '', '', '','',
    ],
    Answers3: [
      '', '','','','',
    ],
    Answers4: [
      '',
    ],
    showResults: false,
  },
  methods: {
    submitForm() {
      this.showResults = true;
    },
    submitByEmail() {
      const emailContent = this.generateTextContent();
      const subject = "Résultats de l'enquête";
      const email = "stevenbachimont@gmail.com";


      const isChrome = /Chrome/.test(navigator.userAgent);

      if (isChrome) {
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        window.open(gmailUrl);
      } else {
        const mailtoUri = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailContent)}`;
        window.location.href = mailtoUri;
      }
    },

    generateTextContent() {
      let textContent = '';
      this.questions.forEach((question, index) => {
        const answer = this.answers[index] ? this.answers[index] : '';
        textContent += `${question.title}\n${answer}\n\n`;
      });
      this.Questions2.forEach((question, index) => {
        const answer = this.Answers2[index] ? this.Answers2[index] : '';
        textContent += `${question.title}\n${answer}\n\n`;
      });
      this.Questions3.forEach((question, index) => {
        const answer = this.Answers3[index] ? this.Answers3[index] : '';
        textContent += `${question.title}\n${answer}\n\n`;
      });
      this.Questions4.forEach((question, index) => {
        const answer = this.Answers4[index] ? this.Answers4[index] : '';
        textContent += `${question.title}\n${answer}\n\n`;
      });
      return textContent;
    },
  },
});

