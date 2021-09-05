---
'wingman-fe': patch
---

**QuestionnaireBuilder:** Make question choice input value non-null

In the SEEK API `ApplicationQuestionChoiceInput.value` is non-null while `ApplicationQuestionChoice.value` is nullable.
    
Our choice input Runtype had this as nullable which is incorrect.
