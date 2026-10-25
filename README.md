# 전해도금 석출 질량 계산기

패러데이 전기분해 법칙과 입력한 전류효율로 목표 반응에서 석출되는 물질의 질량을 구합니다.

- ID: E157
- App: https://nanalab.kr/eng-electroplating-mass/
- Repository: https://github.com/NaNaCompany/eng-electroplating-mass
- Formula: m = η I t M/(zF)

## Model and data

일정한 전류와 전류효율, 정해진 전자수의 단일 석출반응을 가정합니다. z는 전극 반응식에서 석출 물질 한 화학식 단위당 필요한 양의 정수 전자수입니다. 부반응은 η에 반영하며 확산 제한·재용해·박리·질량전달 변화는 별도로 계산하지 않습니다. 도금 두께에는 밀도와 실제 면적이 추가로 필요합니다.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
