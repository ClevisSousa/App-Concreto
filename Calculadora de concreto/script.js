document.getElementById("calcular").addEventListener("click", function() {
  const fck = document.getElementById("fck").value;
  const cimento = document.getElementById("cimento").value;

  const receitas = {
    // Aqui fica a lista de receitas já definidas 

      "15_MPA_CP_II": ["5 latas de brita", "5 latas de areia", "1 saco de cimento", "1 lata de água"],
      "20_MPA_CP_II": ["4,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "1 lata de água"],
      "25_MPA_CP_II": ["3,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,5 lata de água"],
      "30_MPA_CP_II": ["3 latas de brita", "4 latas de areia", "1 saco de cimento", "0,5 lata de água"],
      "35_MPA_CP_II": ["2,5 latas de brita", "3,5 latas de areia", "1 saco de cimento", "0,5 lata de água"],
      "15_MPA_CP_III": ["5 latas de brita", "5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
      "20_MPA_CP_III": ["4,5 latas de brita", "4,5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
      "25_MPA_CP_III": ["3,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
      "30_MPA_CP_III": ["3 latas de brita", "4 latas de areia", "1 saco de cimento", "0,6 lata de água"],
      "35_MPA_CP_III": ["2,5 latas de brita", "3,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
      "15_MPA_CP_IV": ["5 latas de brita", "5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
      "20_MPA_CP_IV": ["4,5 latas de brita", "4,5 latas de areia", "1,1 saco de cimento", "1 lata de água"],
      "25_MPA_CP_IV": ["3,5 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
      "30_MPA_CP_IV": ["3 latas de brita", "4 latas de areia", "1 saco de cimento", "0,6 lata de água"],
      "35_MPA_CP_IV": ["2,5 latas de brita", "3,5 latas de areia", "1 saco de cimento", "0,6 lata de água"],
      "15_MPA_CP_V": ["6 latas de brita", "6 latas de areia", "1 saco de cimento", "1 lata de água"],
      "20_MPA_CP_V": ["5,5 latas de brita", "5,5 latas de areia", "1 saco de cimento", "1 lata de água"],
      "25_MPA_CP_V": ["4,5 latas de brita", "5 latas de areia", "1 saco de cimento", "0,5 lata de água"],
      "30_MPA_CP_V": ["4 latas de brita", "4,5 latas de areia", "1 saco de cimento", "0,5 lata de água"],       
      };
  

  //Obter a opção selecionada pelo usuário
  const opcao = document.querySelector('input[name="tipo-concreto"]:checked').value + "_MPA_CP_" ;

  //Obter a proporção de materiais da opção selecionada
  const [brita, areia, agua] = receitas[opcao];

  //Exibir o resultado na página
  const resultado = `Para um saco de cimento de ${cimento} kg, a proporção é ${brita} latas de brita, ${areia} latas de areia e ${agua} litros de água.`;
  document.getElementById("resultado").innerHTML = resultado;
    }
);






