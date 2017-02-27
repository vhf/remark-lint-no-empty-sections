const test = require('tape');
const remark = require('remark');
const lint = require('remark-lint');
const noEmptySections = require('./');

const processor = remark().use(lint).use(noEmptySections);

const empty = `# A

## B (this section is empty!)

## C
`;

const higher = `# A

## B (this section is empty!)

# C
`;

const lower = `# A

## B

### C
`;

const ok = `# A

## C
`;

test('remark-lint-no-empty-sections', (t) => {
  t.deepEqual(
    processor.processSync(empty).messages.map(String),
    ['3:30-5:1: Remove empty section: "B (this section is empty!)"'],
    'should warn for empty sections'
  );

  t.deepEqual(
    processor.processSync(lower).messages.map(String),
    [],
    'should work on lower headings'
  );

  t.deepEqual(
    processor.processSync(higher).messages.map(String),
    [],
    'should work on higher headings'
  );

  t.deepEqual(
    processor.processSync(ok).messages.map(String),
    [],
    'should work on valid fixtures'
  );

  t.end();
});
