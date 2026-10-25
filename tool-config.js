export const tool={
  "id": "E157",
  "slug": "eng-electroplating-mass",
  "title": "전해도금 석출 질량 계산기",
  "title_en": "Electroplating deposited mass calculator",
  "category": "화학·화학공학",
  "category_en": "Chemistry and chemical engineering",
  "fields": [
    {
      "key": "current",
      "label": "일정한 전류 I",
      "label_en": "Constant current I",
      "dimension": "current",
      "example": 2,
      "constraint": "nonnegative",
      "display_unit": "A",
      "display_value": "2"
    },
    {
      "key": "duration",
      "label": "도금 시간 t",
      "label_en": "Plating duration t",
      "dimension": "time",
      "example": 3600,
      "constraint": "nonnegative",
      "display_unit": "s",
      "display_value": "3600"
    },
    {
      "key": "molar",
      "label": "석출 물질의 몰질량 M",
      "label_en": "Molar mass of the deposited species M",
      "dimension": "molarMass",
      "example": 0.063546,
      "constraint": "positive",
      "display_unit": "gmol",
      "display_value": "63.546000000000006"
    },
    {
      "key": "electrons",
      "label": "물질 한 화학식 단위당 전자수 z",
      "label_en": "Electron count per deposited formula unit z",
      "dimension": "ratio",
      "example": 2,
      "constraint": "integer",
      "display_unit": "1",
      "display_value": "2"
    },
    {
      "key": "efficiency",
      "label": "목표 석출반응의 전류효율 η",
      "label_en": "Current efficiency for the desired deposition reaction η",
      "dimension": "fraction",
      "example": 0.9,
      "constraint": "unitInterval",
      "display_unit": "1",
      "display_value": "0.90000000000000002"
    }
  ],
  "result_label": "석출 질량 m",
  "result_label_en": "Deposited mass m",
  "result_dimension": "mass",
  "output_unit": "g",
  "formula": "m = η I t M/(zF)",
  "purpose": "패러데이 전기분해 법칙과 입력한 전류효율로 목표 반응에서 석출되는 물질의 질량을 구합니다.",
  "purpose_en": "Use Faraday's law and the entered current efficiency to calculate the mass deposited by the desired electrode reaction.",
  "assumptions": "일정한 전류와 전류효율, 정해진 전자수의 단일 석출반응을 가정합니다. z는 전극 반응식에서 석출 물질 한 화학식 단위당 필요한 양의 정수 전자수입니다. 부반응은 η에 반영하며 확산 제한·재용해·박리·질량전달 변화는 별도로 계산하지 않습니다. 도금 두께에는 밀도와 실제 면적이 추가로 필요합니다.",
  "assumptions_en": "Required: constant current, constant current efficiency and one deposition reaction with a specified electron count. z is the positive integer electron count per deposited formula unit in the balanced electrode reaction. Side reactions are represented by η. Excluded: explicit diffusion limits, redissolution, detachment and changing mass transfer. Plating thickness additionally requires density and actual area.",
  "sources": [
    {
      "label": "OpenStax Chemistry 2e, electrolysis stoichiometry",
      "url": "https://openstax.org/books/chemistry-2e/pages/17-7-electrolysis"
    }
  ],
  "condition": "전극 반응의 전자수·몰질량·전류효율과 일정 전류 가정을 확인했습니다.",
  "condition_en": "I confirm the electrode-reaction electron count, molar mass, current efficiency and constant-current assumption.",
  "site": "https://nanalab.kr/eng-electroplating-mass/",
  "repository": "https://github.com/NaNaCompany/eng-electroplating-mass",
  "groups": []
};
