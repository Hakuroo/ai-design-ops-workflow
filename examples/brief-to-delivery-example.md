# Brief to Delivery Example

This example shows how a messy creative request can become organized production work. The client is fictional.

## Messy Client Brief

**Fictional client:** ForgeLine Construction Group

> We need a landing page section for an upcoming construction campaign. It should feel strong and modern, maybe about planning and reliability. We want something that can work for industrial clients. Keep it simple but premium. We may need copy too. It should be ready for review next week.

## Clarified Requirements

After reviewing the brief, the production team asks a few questions and confirms:

- The deliverable is one landing page hero section.
- The audience is operations, procurement, and project leads at industrial companies.
- The tone should be professional, direct, and reliable.
- The section needs a headline, short paragraph, CTA, and three feature points.
- The CTA is a demo placeholder for now.
- No real client photography or confidential project details should be used.
- The first version should be simple HTML and CSS for review.

## Tickets

### Ticket 1: Create hero copy options

**Objective**  
Create headline, intro copy, CTA, and feature list options for review.

**Acceptance criteria**

- [ ] Provide at least 3 headline options.
- [ ] Provide at least 2 CTA options.
- [ ] Avoid unsupported claims.
- [ ] Mark the recommended direction.

### Ticket 2: Build responsive hero section

**Objective**  
Implement the selected copy as a clean HTML/CSS section.

**Acceptance criteria**

- [ ] Uses semantic HTML.
- [ ] Includes hero title, paragraph, CTA, and feature list.
- [ ] Works on desktop and mobile.
- [ ] Does not use external dependencies.

### Ticket 3: QA and delivery notes

**Objective**  
Review the section and document final delivery.

**Acceptance criteria**

- [ ] Layout reviewed on desktop and mobile.
- [ ] Copy reviewed by a human.
- [ ] CTA behavior documented as a demo placeholder.
- [ ] Final files listed in delivery notes.

## AI Prompts

### Brief Analysis Prompt

```text
Summarize this rough creative brief into clear production requirements.

Return:
1. Goal
2. Audience
3. Deliverables
4. Required content
5. Missing questions
6. Production risks

Do not invent confidential details.

Brief:
[Paste rough brief]
```

### Copy Support Prompt

```text
Generate 5 hero headline options and 3 CTA options for a fictional industrial construction campaign.

Tone:
- Professional
- Reliable
- Direct
- Modern

Avoid exaggerated claims and avoid naming real companies.
```

### Code Review Prompt

```text
Review this landing page hero HTML and CSS.

Focus on semantic structure, responsive behavior, accessibility basics, and CSS readability.
Suggest small practical improvements only.
```

## Web Section

The selected direction is implemented in:

- `examples/landing-section.html`
- `examples/landing-section.css`

The section includes:

- Hero title
- Short campaign paragraph
- CTA button
- Three feature points
- Responsive layout
- No external dependencies

## QA Checklist

- [ ] Desktop layout reviewed.
- [ ] Mobile layout reviewed.
- [ ] Copy checked for clarity and accuracy.
- [ ] CTA marked as demo link.
- [ ] Heading structure reviewed.
- [ ] Color contrast checked at a basic level.
- [ ] AI-assisted copy reviewed and edited by a human.

## Final Delivery Notes

**Files delivered**

- `landing-section.html`
- `landing-section.css`

**Notes**

- This is a demo web section for review, not a live client asset.
- CTA destination uses a placeholder anchor.
- Copy was generated with AI support and then edited for clarity.
- No real company data, logos, or confidential construction project details are included.

**Next steps**

- Add approved brand colors if this becomes a real campaign page.
- Connect CTA to the correct form or contact destination.
- Add final imagery after visual direction is approved.
