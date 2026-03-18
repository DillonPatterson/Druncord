type SchemaOrgProps = {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function SchemaOrg({ data }: SchemaOrgProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
