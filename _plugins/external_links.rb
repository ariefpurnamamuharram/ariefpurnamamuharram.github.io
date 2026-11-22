# Add target="_blank" (and rel="noopener noreferrer") to external http(s) links.
require "uri"

Jekyll::Hooks.register [:pages, :documents], :post_render do |doc|
  next unless doc.output.is_a?(String)

  site_host = begin
    URI.parse(doc.site.config["url"].to_s).host
  rescue StandardError
    nil
  end

  doc.output = doc.output.gsub(/<a\s+([^>]*?)>/i) do |tag|
    attrs = Regexp.last_match(1)
    href_match = attrs.match(/\bhref\s*=\s*(["'])(.*?)\1/i)
    next tag unless href_match

    href = href_match[2].to_s.strip
    next tag unless href =~ %r{\Ahttps?://}i

    begin
      link_host = URI.parse(href).host
    rescue StandardError
      next tag
    end

    # Skip same-site absolute URLs
    next tag if site_host && link_host && link_host.casecmp?(site_host)

    updated = attrs.dup
    updated = updated.sub(/\btarget\s*=\s*(["']).*?\1/i, "")
    updated = updated.sub(/\brel\s*=\s*(["']).*?\1/i, "")
    updated = updated.strip
    updated = "#{updated} " unless updated.empty?
    %(<a #{updated}target="_blank" rel="noopener noreferrer">)
  end
end
