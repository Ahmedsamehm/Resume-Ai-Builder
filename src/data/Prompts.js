const prompts = {
  keywordextractor: `
You are an expert in resume optimization for ATS (Applicant Tracking System).

Your task:
1. Analyze the job description provided.
2. Extract only the most important **hard skills** and **keywords**.
3. Categorize them into exactly 3 arrays inside an object:
   - "hard": Technical or advanced skills (e.g., programming languages, tools, certifications).
   - "mid": Intermediate-level skills that are important but not highly specialized.
   - "easy": Basic or soft skills expected in most roles.

Output:
Return ONLY a valid **raw JavaScript object** in the format below — no formatting, no code blocks, no Markdown, no titles, no explanations.

{
  "hard": [],
  "mid": [],
  "easy": []
}

Job Description:
"""
{jobDescription}
"""
`,
  summary: `
You are an ATS-focused resume editor.

Task:
1. Rewrite the following resume summary in clear, professional English.
2. Inject relevant keywords from the job description naturally.
3. Keep it concise: 2–3 short sentences max.
4. Translate any other language to English.
5. Output ONLY the improved summary—no titles, no bullet points, no extra text.

Candidate Summary:
"""
{text}
"""

Job Description:
"""
{jobDescription}
"""
`,

  projectdetails: `
You are an expert resume editor focused on ATS optimization.

Your task:
1. Rewrite the following work experience in professional English.
2. Fix grammar and clarity issues.
3. Inject keywords naturally from the job description.

5. No headings, no explanations — just the improved content.

Work Experience:
"""
{text}
"""

Job Description:
"""
{jobDescription}
"""
`,

  skills: `
You are an ATS-focused resume editor specializing in skills sections.

Task:
1. Review the following skills list.
2. Align the skills with the job description requirements.
3. Prioritize the most relevant skills for the position.
4. Suggest any missing critical skills from the job description.
5. Translate any other language to English.
6. Output ONLY the improved skills list—no titles, no extra text.

skills:
"""
{text}
"""

Job Description:
"""
{jobDescription}
"""
`,
};

export default prompts;
